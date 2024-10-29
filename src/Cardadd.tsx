import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, {useState } from  'react';

export default function Cardadd() {

  const [cart, setCart] = useState ([]);
  const [total, setTotal] = useState (0);

  const items = [
    { id: 1, name: "Waffle with Berries", price: 6.5, image: "/assets/waffle cart1.jpg" },
    { id: 2, name: "Vanilla Bean Crème Brûlée", price: 7.0, image: "/assets/creme-brulee cart2.jpg" },
    { id: 3, name: "Macaron Mix of Five", price: 8.0, image: "/assets/macaron cart3.jpg" }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
    }else {
      setCart([...cart, { ...item,quantity:1}]);
    }
    setTotal(total + item.price);
  }
  const increaseQuantity = (item) => {
    setCart(cart.map(cartItem => 
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    setTotal(total + item.price);
  };

  const decreaseQuantity = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ));
    }
    setTotal(total - item.price);
  };
    return(
      <Box className="m-auto max-w-[1980px] min-h-screen flex justify-center items-center bg-white">
      <Box className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
        {items.map(item => {
          const inCart = cart.find(cartItem => cartItem.id === item.id);
          return(
        <Box key={item.id} className="relative">
          <CardMedia
            className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg"
            component="img"
            image={item.image}
            alt={item.image}

          />
          
              {inCart ? (
                <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="#ff3030" borderRadius={5} mt={1} sx={{color:"white"}}>
                <IconButton onClick={() => decreaseQuantity(item)} sx={{color:"black"}}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" mx={1}>{inCart.quantity}</Typography>
                <IconButton onClick={() => increaseQuantity(item)} sx={{color:"black"}}>
                  <AddIcon />
                </IconButton>
              </Box>
              ):(

               
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => addToCart(item)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black border-white rounded-lg px-5"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'white',
                    borderRadius: '16px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    boxShadow: 3,
                    fontFamily: 'Public Sans, sans-serif',
                  }}
                  startIcon={<AddShoppingCartOutlinedIcon className="text-red-500" />}
                >
                  <Typography fontWeight='bold' className="text-xs font-semibold text-black capitalize">Add Cart</Typography>
                </Button>
                
              )}
              <Typography variant="body1" fontWeight="bold" color="#8c6f62" mt={1}>{item.name}</Typography>
              <Typography variant="h6" fontWeight="bold" color="#964c39">${item.price.toFixed(2)}</Typography>

        
          {/* <Typography fontWeight='bold' className="text-sm text-[#8c6f62] font-bold mt-2">Crème Brûlée</Typography>
          <Typography fontWeight='bold'>Vanilla Bean Crème Brûlée</Typography>
          <Typography fontWeight='bold' color={'#964c39'}>$7.00</Typography> */}
        </Box>
         ); })}
      
        </Box>

           {/* Cart Summary */}
      <Box
        width="300px"
        ml={4}
        p={2}
        border="1px solid #e0e0e0"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="#fafafa"
      >
        <Typography variant="h6" fontWeight="bold" color="#964c39">Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Typography>
        {cart.map(cartItem => (
          <Box key={cartItem.id} display="flex" alignItems="center" justifyContent="space-between" width="100%" my={1}>
            <Box display="flex" alignItems="center">
              <Typography>{cartItem.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => decreaseQuantity(cartItem)} size="small" color="error">
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">{cartItem.quantity}</Typography>
              <IconButton onClick={() => increaseQuantity(cartItem)} size="small" color="primary">
                <AddIcon />
              </IconButton>
            </Box>
            <Typography>${(cartItem.price * cartItem.quantity).toFixed(2)}</Typography>
          </Box>
        ))}
        <Typography variant="h6" fontWeight="bold" color="#964c39" mt={2}>
          Order Total: ${total.toFixed(2)}
        </Typography>
        <Button variant="contained" color="error" sx={{ mt: 2, width: '100%' }}>
          Confirm Order
        </Button>
      </Box>
        </Box>
    )
}