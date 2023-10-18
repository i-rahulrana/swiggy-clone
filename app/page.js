import NavBar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="font-mono text-2xl">Home Page</h1>
      </main>
    </>
  );
}
