import express from 'express';
import { faker } from '@faker-js/faker';
import cors from 'cors';


const PORT = 3000;
const app = express();

app.use(cors());
app.get('/getData', async (_req, res) => {
  try {
    const data = [...Array(10)].map(_item => ( {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      id: faker.datatype.uuid(),
      email: faker.internet.email(),
      gender: faker.name.sexType()
    }))
    res.status(201).json({
      data: data
    })
  } catch(e) {
    console.log(e)
    res.status(403).json({
      error: "Error occured"
    });
  }

});

app.listen(PORT, () => {
  console.log("listening to port ", PORT);
})
