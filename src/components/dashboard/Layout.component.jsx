import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
// import Table from "../Table";
import styles from "@/components/dashboard/layout.module.css";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Navbar />
      <Sidebar />
      <section className={styles.content}>{children}</section>
    </main>
  );
};

export default Layout;
