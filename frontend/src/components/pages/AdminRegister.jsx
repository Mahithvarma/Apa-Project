import React from 'react';

const AdminRegister = () => {
  return (
    <div>
      <h1>Admin Register</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile" />
        </label>
        <label>
          Role:
          <input type="text" name="role" />
        </label>
        <label>
          Aadhar:
          <input type="text" name="aadhar" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
