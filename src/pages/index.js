import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setCommentData(response.data));
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>postApp </title>
      </Head>
      <main
        style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingInline: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "49.5%",
            maxHeight: "700px",
            overflowY: "auto",
            backgroundColor: "ButtonFace",
            borderRadius: "5px",
            scrollbarWidth: "none",
          }}
          className={styles.HomepageDiv}
        >
          <h1
            style={{
              width: "100%",
              paddingInline: "35px",
              marginTop: "10px",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Posts
          </h1>
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "49.5%",
            maxHeight: "700px",
            overflowY: "auto",
            backgroundColor: "ButtonFace",
            borderRadius: "5px",
            scrollbarWidth: "none",
          }}
          className={styles.HomepageDiv}
        >
          <h1
            style={{
              width: "100%",
              paddingInline: "35px",
              marginTop: "10px",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Comments
          </h1>
          {commentData.map((data, index) => (
            <section
              key={index}
              className={styles.sectionPost}
              style={{ height: "420px", cursor: "auto" }}
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
                    backgroundColor: "#c1c0c0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginInlineEnd: "10px",
                  }}
                >
                  {data?.id}
                </div>
                <span>comment</span>
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
                <span style={{ fontWeight: "600" }}>postId :</span>{" "}
                <span>{data?.postId}</span>
              </div>
              <div
                style={{
                  paddingInline: "7px",
                  marginBottom: "10px",
                  fontSize: "1.2rem",
                }}
              >
                {" "}
                <span style={{ fontWeight: "600" }}>name :</span>{" "}
                <span>{data?.name}</span>
              </div>
              <div
                style={{
                  paddingInline: "7px",
                  marginBottom: "10px",
                  fontSize: "1.2rem",
                }}
              >
                {" "}
                <span style={{ fontWeight: "600" }}>email :</span>{" "}
                <span>{data?.email}</span>
              </div>
              <p
                style={{
                  paddingInline: "7px",
                  fontSize: "1.1rem",
                  height: "150px",
                }}
              >
                <span style={{ fontWeight: "600" }}>body :</span> {data?.body}
              </p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
