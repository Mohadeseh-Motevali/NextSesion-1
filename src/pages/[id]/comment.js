import styles from "@/styles/Home.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const PostId = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  let route;
  useEffect(() => {
    if (router.query.id) {
      if (+router.query.id)
        route = `https://jsonplaceholder.typicode.com/posts/${router.query.id}/comments`;
      else route = "https://jsonplaceholder.typicode.com/comments";
      axios.get(route).then((response) => setData(response.data));
    }
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>Comments </title>
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.length > 0 ? (
          data.map((data, index) => (
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
          ))
        ) : (
          <p>there is not comment</p>
        )}
      </main>
    </>
  );
};
export default PostId;
