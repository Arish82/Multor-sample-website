import  React , {useState} from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
        {
        palette: {
          primary:{
            main: '#00c2c5'

          },
          secondary: {
            main: '#152f2e'
          },
          whiteColor: {
            main: 'white'
          },
          Black: {
            main: "black"
          }
        }
      }
    );
    
export default function AppointmentForm() {
    const [formData, setformData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
        <ThemeProvider theme={theme}>
            <div className="appointment-form">
            <h1 component="h1" variant="h4">
                Schedule an Appointment
            </h1>
            <p component="p" variant="p">
            Here, let visitors know what will happen when they complete your form.
            </p>
            <div className='' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <input 
                    type="text"
                    className='appointment-text form-field'
                    id='fname'
                    value={formData.fname}
                    placeholder="First Name*"
                    required
                    onChange={(e)=>{ setformData({...formData, fName: e.target.value}) }}
                 />
                <input 
                    type="text"
                    className='appointment-text form-field'
                    id='lname'
                    value={formData.lname}
                    placeholder="Last Name*"
                    required
                    onChange={(e)=>{ setformData({...formData, lname: e.target.value}) }}
                 />
                <input 
                    type="email"
                    className='appointment-email form-field'
                    id='email'
                    value={formData.email}
                    placeholder="Email*"
                    required
                    onChange={(e)=>{ setformData({...formData, email: e.target.value}) }}
                 />
                <input 
                    type="number"
                    className='appointment-email form-field'
                    id='number'
                    value={formData.number}
                    placeholder="Phone Number*"
                    required
                    onChange={(e)=>{ setformData({...formData, number: e.target.value}) }}
                 />
                 <select
                    className='appointment-email form-field'
                    id='number'
                    value={formData.number}
                    placeholder="Phone Number*"
                    required
                  >
                    <option value="1" hidden>Type of Appointment</option>
                    <option value="1">Type 1</option>
                    <option value="2">Type 2</option>
                    <option value="3">Type 3</option>
                 </select>
                <Button
                    style={{"color": "white", "fontSize": "1.2em"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='appointment-btn'
                    // sx={{ mt: 3, mb: 2 }}
                >
                SCHEDULE NOW
                </Button>
            </div>
            </div>
        </ThemeProvider>
        {/* <MuiThemeProvider theme={theme}>
        </MuiThemeProvider> */}
    </>
  );
}
{/* <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
  </Container>
</ThemeProvider> */}