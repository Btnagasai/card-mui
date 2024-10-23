import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Typography } from '@mui/material';

export default function OutlinedCard() {
  return (
    <Box className="m-auto max-w-[1980px] min-h-screen flex justify-center items-center bg-white">
      <Box className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
        {/* First Card */}
        <Box className="relative">
          <CardMedia
            className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg text-center m-auto"
            component="img"
            image="/assets/waffle cart1.jpg"
            alt="waffle"
          />
          <Button
            variant="outlined"
            color="error"
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
          <Typography fontWeight='bold' className="text-sm text-[#8c6f62] font-bold mt-2">Waffle</Typography>
          <Typography fontWeight='bold' className="font-bold">Waffle with Berries</Typography>
          <Typography fontWeight='bold' className="font-bold text-[#964c39]">$6.50</Typography>
        </Box>

        {/* Second Card */}
        <Box className="relative">
          <CardMedia
            className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg"
            component="img"
            image="/assets/creme-brulee cart2.jpg"
            alt="creme-brulee"
          />
          <Button
            variant="outlined"
            color="error"
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
          <Typography fontWeight='bold' className="text-sm text-[#8c6f62] font-bold mt-2">Crème Brûlée</Typography>
          <Typography fontWeight='bold'>Vanilla Bean Crème Brûlée</Typography>
          <Typography fontWeight='bold' color={'#964c39'}>$7.00</Typography>
        </Box>

        {/* Third Card */}
        <Box className="relative">
          <CardMedia
            className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg"
            component="img"
            image="/assets/macaron cart3.jpg"
            alt="macaron"
          />
          <Button
            variant="outlined"
            color="error"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black border-white rounded-lg px-5"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderColor: 'white',
              borderRadius: '16px',
              paddingLeft: '20px',
              paddingRight: '20px',
              boxShadow: 3,
              fontFamily: 'Public Sans',
            }}
            startIcon={<AddShoppingCartOutlinedIcon className="text-red-500" />}
          >
            <Typography fontWeight='bold' className="text-xs font-semibold text-black capitalize">Add Cart</Typography>
          </Button>
          <Typography fontWeight='bold' className="text-sm text-[#8c6f62]  mt-2">Macaron</Typography>
          <Typography fontWeight='bold'>Macaron Mix of Five</Typography>
          <Typography fontWeight='bold' color={'#964c39'}>$8.00</Typography>
        </Box>
      </Box>
    </Box>
  );
}
