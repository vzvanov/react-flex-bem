import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const fetchColumns = async () => {
  const { data } = await $host.get('columns');
  return data;
}

export const fetchVerticals = async () => {
  const { data } = await $host.get('verticals');
  return data;
}