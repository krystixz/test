import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Postcard({ title, description, postlink }) {
  return (
    <Card className="my-4">
      <CardContent>
        <Typography gutterBottom>{title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Button
          href={postlink}
          className="bg-yellow-500 text-white hover:bg-yellow-600"
        >
          View Post
        </Button>
      </CardContent>
    </Card>
  );
}

export default Postcard;
