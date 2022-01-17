import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar'
import Login from './pages/Login';
import Poets from './pages/Poets';
import Poems from './pages/Poems';
import Users from './pages/Users';
import Categories from './pages/Categories';
import PoemsContext from './utils/PoemsContext';

function App() {
  const [poems, setPoems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [poets, setPoets] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  /*Login & Logout*/
  const login = async (e) => { 
    e.preventDefault();
    try {
      const form = e.target;
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value
      };
      const response = await axios.post('https://poems-api-1.herokuapp.com/api/auth/login/admin', adminBody);
      localStorage.tokenDashboardPoems = response.data.token;
      toast.success("login success");
      navigate("/poems");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };
  const logout = async () => { 
    localStorage.removeItem("tokenDashboardPoems");
    console.log("logout success");
    navigate("/login");
  };

  /*Poems*/
  const getPoems = async () => { 
    const response = await axios.get('https://poems-api-1.herokuapp.com/api/poems');
    setPoems([...response.data]);
  };

  const addPoem = async (e, category, poets) => { 
    e.preventDefault()
    try {
      const form = e.target;
   
     const categories = []
      if (form.elements.category) {   
 
        if (form.elements.category.forEach) {
          form.elements.category.forEach(category => {
            if (category.checked) {
              categories.push(category.value);
            }
          });
        } else {
          if (form.elements.category.checked) {
            categories.push(form.elements.category.value);
          }
        }
      }



      const poemBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        category: categories,
        poets: [form.elements.poets.value],
      };

      console.log({ poemBody });
      await axios.post(`https://poems-api-1.herokuapp.com/api/poems`, poemBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getPoems();
      toast.success("add poem success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const editPoem = async (e, poemId, category, poets) => { 
    e.preventDefault();
    try {
      const form = e.target;

      const categories = [];
      console.log(form.elements.categories);
      form.elements.categories?.forEach(category => {
        if (category.checked) {
          categories.push(category.value);
        }
      });

      console.log(categories)

      const poets = [];
      form.elements.poets?.forEach(poet => {
        if (poet.checked) {
          poets.push(poet.value);
        }
      })

      const poemBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        category: categories,
        poets: poets,
      };
      await axios.put(`https://poems-api-1.herokuapp.com/api/poems/${poemId}`, poemBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getPoems();
      toast.success("Edit success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const deletePoem = async (poemId) => { 
    try {
      await axios.delete(`https://poems-api-1.herokuapp.com/api/poems/${poemId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      toast.success("Poem deleted");
      getPoems();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  /*Categories*/
  const getCategories = async () => { 
    const response = await axios.get('https://poems-api-1.herokuapp.com/api/categories');
    setCategories([...response.data]);
  };

  const addCategory = async (e) => { 
    e.preventDefault();
    try {
      const form = e.target;

      const categoryBody = {
        name: form.elements.name.value,
      };
      await axios.post(`https://poems-api-1.herokuapp.com/api/categories`, categoryBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getCategories();
      toast.success("add category success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const editCategory = async (e, categoryId) => { 
    e.preventDefault();
    try {
      const form = e.target;

      const categoryBody = {
        name: form.elements.name.value,
      };
      await axios.put(`https://poems-api-1.herokuapp.com/api/categories/${categoryId}`, categoryBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getCategories();
      toast.success("Edit successfully");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const deleteCategory = async (categoryId) => { 
    try {
      await axios.delete(`https://poems-api-1.herokuapp.com/api/categories/${categoryId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      toast.success("Category deleted");
      getCategories();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  /*Poets*/
  const getPoets = async () => { 
    const response = await axios.get('https://poems-api-1.herokuapp.com/api/poets')
    setPoets([...response.data]);
  };

  const addPoet = async (e, poems) => { 
    e.preventDefault();
    try {
      const form = e.target;

      // const poems = [];
      // if (form.elements.poems) {
        
      //   form.elements.poems.forEach(poem => {
      //     if (poem.checked) {
      //       poems.push(poem.value);
      //     }
      //   });
      // }

      const poetBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        description: form.elements.description.value,
        poems,
      };

      await axios.post("https://poems-api-1.herokuapp.com/api/poets", poetBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getPoets();
      toast.success("add poet success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const editPoet = async (e, poetId, poems) => { 
    e.preventDefault();
    try {
      const form = e.target;

      // const poems = [];
      // form.elements.poems?.forEach(poem => {
      //   if (poem.checked) {
      //     poems.push(poem.value);
      //   }
      // });

      const poetBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        description: form.elements.description.value,
        poems,
      };

      await axios.put(`https://poems-api-1.herokuapp.com/api/poets/${poetId}`, poetBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getPoets();
      toast.success("Edit successfully");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const deletePoet = async (poetId) => { 
    try {
      await axios.delete(`https://poems-api-1.herokuapp.com/api/poets/${poetId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      toast.success("Poet deleted");
      getPoets();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  /*Useres*/
  const getUsers = async () => { 
    const response = await axios.get('https://poems-api-1.herokuapp.com/api/auth/users', {
      headers: {
        Authorization: localStorage.tokenDashboardPoems,
      },
    });
    setUsers([...response.data]);
  };

  const addUser = async (e) => { 
    e.preventDefault();
    console.log('Creating User');
    try {
      const form = e.target;
      const isAdmin = form.elements.isAdmin.checked;
      let url = 'https://poems-api-1.herokuapp.com/api/auth/signup';
      if(isAdmin) url = 'https://poems-api-1.herokuapp.com/api/auth/add-admin'
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      };
      
      await axios.post(url, userBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      getUsers();
      toast.success("add user success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const editUser = async (e, profileId) => {
    e.preventDefault();
    try {
      const form = e.target;
      const isAdmin = form.elements.isAdmin.checked;
      let role = "User";
      if(isAdmin) role = "Admin"
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        // email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        role,
      };

      console.log(userBody);

      await axios.put(`https://poems-api-1.herokuapp.com/api/auth/profile/${profileId}`, userBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });

      getUsers();
      toast.success("update user success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      console.log('start delete user');
      await axios.delete(`https://poems-api-1.herokuapp.com/api/auth/profile/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPoems,
        },
      });
      toast.success("User deleted");
      getUsers();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };


  useEffect(() => {
    getPoems();
    getCategories();
    getPoets();
    getUsers();
  }, []);

  const store = {
    poems,
    poets,
    categories,
    users,
    login,
    logout,
    addPoem,
    editPoem,
    deletePoem,
    addCategory,
    editCategory,
    deleteCategory,
    addPoet,
    editPoet,
    deletePoet,
    addUser,
    editUser,
    deleteUser
  };

  return (
    <PoemsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgColor: "background.default", p: 3 }}>
          <Routes>
            {["/", "/poems"].map((path, index) => 
              <Route path={path} exact element={<Poems />} key={index} />
            )}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/poets" element={<Poets />} />
            <Route exact path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </PoemsContext.Provider>
  );
}

export default App;
