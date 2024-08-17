"use client";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/app/_utils/GenerateRandomStrings";

function Upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);
  const db = getFirestore(app);

  const saveInfo = async (file, fileUrl) => {
    const docId = Date.now().toString();
    const userEmail = user?.primaryEmailAddress?.emailAddress || "Unknown";
    const userName = user?.fullName || "Unknown";
    const shortUrl = process.env.NEXT_PUBLIC_BASE_URL + generateRandomString();

    console.log({
      fileName: file?.name || "Unknown",
      fileSize: file?.size || 0,
      fileType: file?.type || "Unknown",
      fileUrl: fileUrl,
      userEmail: userEmail,
      userName: userName,
      shortUrl: shortUrl,
    });

    try {
      await setDoc(doc(db, "uploadedFile", docId), {
        fileName: file?.name || "Unknown",
        fileSize: file?.size || 0,
        fileType: file?.type || "Unknown",
        fileUrl: fileUrl,
        userEmail: userEmail,
        userName: userName,
        password: "",
        shortUrl: shortUrl,
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  const uploadFile = (file) => {
    const metadata = { contentType: file.type };
    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);

        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            saveInfo(file, downloadURL);
          });
        }
      },
      (error) => {
        console.error("Upload failed", error);
      }
    );
  };

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-primary">Uploading</strong> file and{" "}
        <strong className="text-primary">share</strong> it
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
}

export default Upload;
