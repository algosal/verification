export const handleVerify = async (code, onVerify) => {
  try {
    const res = await fetch(
      `https://salmansaeed.us/verification/api/verify.php?code=${code}`
    );
    const data = await res.json();
    onVerify(data);
  } catch (err) {
    onVerify({ status: "error" });
  }
};
