import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/user";

export const handleGetAllUsers = createAsyncThunk(
  "user/fetAllUser",
  async () => {
    const response = await UserAPI.getAllUsers();
    localStorage.setItem("LishUser", JSON.stringify(response));

    return response;
  }
);
//1 action bất đồng bộ để thao tác với databasse nó sử dụng createAsyncThunk nhận vào 2 tham số
//1 cái tên
//1 cái funtion bất đồng bộ
// hàm bất đồng bộ nó sẽ call API(thực hiện trao đổi thông tin với databasse thông qua thằng UsẻrAPI được viết trong thưc api ==> mà thư mục ấy sử axios )
// thằng này nó trả về con a dữ liệu
//thế thì làm sao để mà thực hiện action thì ở phía component mình dispatch action này

//khi mà hàm bất đồng bộ trả về rồi

//===> xuống thằng extreducer để cập nhật nó lại
export const handleUpdatUser = createAsyncThunk(
  "user/updatUser",
  async (payload) => {
    const response = await UserAPI.updateUser(payload);
    return response;
  }
);

export const Handledeleteuser = createAsyncThunk(
  "user/deleteUser",
  async (payload) => {
    const data = JSON.parse(localStorage.getItem("LishUser"));
    const finalData = data.filter((item) => item.id !== payload);
    await UserAPI.deleteUser(payload);
    return finalData;
  }
);

const UserAdminSlice = createSlice({
  name: "userAdmin",
  initialState: JSON.parse(localStorage.getItem("LishUser")) || [],
  extraReducers: {
    [handleGetAllUsers.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleUpdatUser.fulfilled]: (state, action) => {
      const newStateIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[newStateIndex] = action.payload;
      return state;
    },
    [Handledeleteuser.fulfilled]: (state, action) => {
      state = action.payload;
      localStorage.setItem("LishUser", JSON.stringify(state));
      return state;
    },
  },
});

const { actions, reducer } = UserAdminSlice;

export default reducer;
