async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 2 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log("prerander");
  return res.json();
}

const findAll = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
};

async function deleteData() {
  const res = await fetch(`http://127.0.0.1:4000/api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nameStore: "yasdfsine1",
      email: "testnext1@gmail.com",
      password: "test123",
      passwordConfirm: "test123",
      role: "admin",
    }),
  });
  return res.json();
}

const GetService = {
  findAll,
  getData,
  deleteData,
};

export default GetService;
