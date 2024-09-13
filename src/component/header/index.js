import Link from "next/link";
import Styles from "@/component/header/index.module.css";
const Header = () => {
  return (
    <>
      <header className={Styles["header"]}>
        <Link href={"/"} className={Styles["link"]}>
          Home
        </Link>
        <Link href={"/post"} className={Styles["link"]}>
          Post
        </Link>
        <Link href={"/0/comment"} className={Styles["link"]}>
          Comment
        </Link>
      </header>
    </>
  );
};
export default Header;
