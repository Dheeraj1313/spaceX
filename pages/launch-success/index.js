import Home from "../index";
export async function getStaticProps() {
  const res = await fetch(
    "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default Home;
