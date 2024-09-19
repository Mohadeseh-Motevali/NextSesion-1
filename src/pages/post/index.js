import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home({data}) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setData(response.data));
  // }, []);
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>posts </title>
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          paddingInline: "20px",
        }}
      >
        {data.map((i, index) => (
          <Link
            href={`/${i.id}`}
            key={index}
            className={styles.sectionPost}
            style={{ height: "220px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBlockEnd: "10px",
                fontSize: "1.5rem",
                fontWeight: "600",
                padding: "7px",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  backgroundColor: "pink",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#e9778b",
                  marginInlineEnd: "10px",
                }}
              >
                {i?.id}
              </div>
              <span>post</span>
            </div>
            <hr
              style={{
                width: "100%",
                border: "1px solid Background",
                marginBottom: "10px",
              }}
            />
            <div
              style={{
                paddingInline: "7px",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              {" "}
              <span style={{ fontWeight: "600" }}>title :</span>{" "}
              <span>{i?.title}</span>
            </div>
            <div
              style={{
                paddingInline: "7px",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              {" "}
              <span style={{ fontWeight: "600" }}>userId :</span>{" "}
              <span>{i?.userId}</span>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
export const getServerSideProps = async() =>{

  const data =await axios.get("https://jsonplaceholder.typicode.com/posts") 
  return{ props : {data :data.data}}
}
