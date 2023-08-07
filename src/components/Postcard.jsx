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
          color="secondary"
          variant="contained"
          sx={{
            bgcolor: "#FACC15",
            color: "white",
            ":hover": { bgcolor: "#CA8A04" },
          }}
        >
          View Post
        </Button>
      </CardContent>
    </Card>
  );
}

export default Postcard;
