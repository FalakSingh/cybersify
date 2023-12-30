import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../service/api";

const register = createAsyncThunk("register", async (givendata) => {
  const { data } = await api.post("/auth/register", givendata);
  data?.success && toast.success(data?.message);
  !data?.success && toast.error(data?.message);
  return data;
});

const login = createAsyncThunk("login", async (givendata) => {
  const { data } = await api.post("/auth/login", givendata);
  data?.success && toast.success(data?.message);
  !data?.success && toast.error(data?.message);
  return data;
});

export { register, login };
