// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (request, response) => {
	response.status(200).json({ name: "ok" });
};

export default handler;
