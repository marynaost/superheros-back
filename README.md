Description Backend for Superheroes App

@ GET / - Get all heroes

@ GET /:id - Get hero by ID

@ POST / - Add new hero data.

Example for POST /
All fields are required, except for the image
Field images must be as URL link
{
"images": "https://cdn.pixabay.com/photo/2017/07/19/17/26/gabriel-2519793_960_720.jpg"
}

@ DELETE /:id - Delete hero by ID

@PATCH /:id - Update hero data by ID
