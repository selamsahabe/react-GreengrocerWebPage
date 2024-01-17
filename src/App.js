import React, { useState } from "react";
import './style.css';
import { useStore}from'./store';

import Navbar from './Navbar';
import StorePage from './StorePage';
import Cart from './Cart';

export default function App() {
const {isModalOpen} =useStore();

return (
<div>
<Navbar  />
<StorePage />
{ isModalOpen && <Cart />}
</div>
  );
}
