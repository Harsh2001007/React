fetch("https://mywebsite.example/endpoint/", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    membersData: "yourValue",
    status: "yourOtherValue",
  }),
});

const handleSubmit = async () => {
  const data = {
    stateOne,
    stateTwo,
  };

  try {
    const response = await fetch("https://your-api-endpoint.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Success:", responseData);
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleSubmit = async () => {
  const data = {
    stateOne,
    stateTwo,
  };

  try {
    const response = await axios.post(
      "https://your-api-endpoint.com/api",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
