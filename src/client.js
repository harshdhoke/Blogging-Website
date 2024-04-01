import client from "@sanity/client"

export default client({
  projectId: "epmot90c",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-05",
})