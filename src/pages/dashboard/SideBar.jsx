import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" style={sidebarStyles}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} style={itemStyles}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} style={itemStyles}>
            Upload Items
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} style={itemStyles}>
            Manage Items
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/suppliers" icon={HiUser} style={itemStyles}>
            Suppliers
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiShoppingBag} style={itemStyles}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight} style={itemStyles}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable} style={itemStyles}>
            Sign Up
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={BiBuoy} style={itemStyles}>
            Installment
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

const sidebarStyles = {
  backgroundColor: '#2c3e50',
  fontWeight: 'bold',
  padding: '10px 20px',
  color: '#ffffff',
  textDecoration: 'none',
  backgroundImage: 'url("https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
  backgroundSize: 'auto 90%',


};

const itemStyles = {
  transition: 'background-color 0.3s ease',
  fontWeight: 'bold',
  padding: '10px 20px',
  margin: '5px 0',
  borderRadius: '5px',
  cursor: 'pointer',

};

export default SideBar;
