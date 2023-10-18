export default function Profile() {
  // Fetch the user client-side

  // Once the user request finishes, show the user
  return (
    <div id="profile-container" className="">
      <header
        id="header"
        className="h-14 flex border items-center px-8 py-2 justify-between z-10"
      >
        <div id="logo" className="flex">
          <span className="font-mono text-2xl">Swiggy</span>
        </div>
        <div>
          <pre></pre>
        </div>
      </header>
      <main id="main-profile" className="p-8">
        <h1 className="font-display text-2xl">Profile Page</h1>
      </main>
    </div>
  );
}
