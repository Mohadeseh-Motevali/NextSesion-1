import styles from "@/styles/Home.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const PostId = () => {

  const router = useRouter();
  const [data, setData] = useState();
  const id = router;
  
  useEffect(() => {
    const id = router;
    if (router.query.id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
        .then((response) => setData(response.data));
    }
  }, []);

  return (
    <>
      <Head>
        <title>postDetails </title>
      </Head>
      <main>
        {data ? (
          <Link
            href={`/${data.id}/comment`}
            className={styles.sectionPost}
            style={{ backgroundColor: "#fde9ed", maxHeight: "400px" }}
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
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#e9778b",
                  marginInlineEnd: "10px",
                }}
              >
                {data?.id}
              </div>
              <span>postInfo</span>
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
              <span style={{ fontWeight: "600" }}>userId :</span>{" "}
              <span>{data?.userId}</span>
            </div>
            <div
              style={{
                paddingInline: "7px",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              {" "}
              <span style={{ fontWeight: "600" }}>title :</span>{" "}
              <span>{data?.title}</span>
            </div>

            <p style={{ paddingInline: "7px", fontSize: "1.1rem" }}>
              <span style={{ fontWeight: "600" }}>body :</span> {data?.body}
            </p>
          </Link>
        ) : (
          <p style={{ marginBlock: "auto" }}>the post dont have detail</p>
        )}
      </main>
    </>
  );
};
export default PostId;
