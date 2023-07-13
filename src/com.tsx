

export default function Comp() {

  const handleDelete = async () => {
    console.log("clicked");

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => handleDelete()}>click to push</button>
    </main>
  );
}
