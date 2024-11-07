const getUser = async () => {
  try {
    const response = await fetch('https://vk.com');
    const data = await response.json();
  } catch (e) {
    console.log(e);
  }
};
getUser();
