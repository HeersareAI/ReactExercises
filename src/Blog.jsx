import Header from "./Header";
import Post from "./Post";
import Footer from "./Footer";

const posts = [
  {
    id: 1,
    title: "Why Every Developer Should Learn to Read Compiler Errors",
    content:
      "Most developers treat compiler errors like car alarms — loud, annoying, and easy to ignore. But buried in that dense stack trace is a precise map to your bug. Learning to read errors fluently is one of the highest-leverage skills you can build. It shortens the feedback loop, eliminates guesswork, and turns frustration into a structured debugging process.",
    date: "May 19, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Quiet Power of Consistent Naming Conventions",
    content:
      "Naming is the first act of documentation. A well-named variable tells you what it holds, what it represents, and sometimes even why it exists — all without a single comment. Codebases with consistent naming conventions are dramatically easier to navigate, review, and extend. The 30 seconds you spend choosing a good name pays dividends for the lifetime of the file.",
    date: "May 12, 2026",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Component Composition: Building UIs Like Lego",
    content:
      "React's component model mirrors the way great UIs are actually designed — as a hierarchy of focused, reusable pieces. When each component does one thing well, composition becomes trivial and refactoring becomes safe. The mental shift from 'building pages' to 'assembling components' is one of the most freeing transitions in modern frontend development.",
    date: "May 5, 2026",
    readTime: "6 min read",
  },
];

function Blog() {
  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.main}>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            date={post.date}
            readTime={post.readTime}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f0f0f",
  },
  main: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "3rem 2rem",
  },
};

export default Blog;
