const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const categoryProductRoute = require("./routes/categoryProductRoute");
const categoryBlogRoute = require("./routes/categoryBlogRoute");
const brandRoute = require("./routes/brandRoute");
const couponRoute = require("./routes/couponRoute");

const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/category-product", categoryProductRoute);
app.use("/api/category-blog", categoryBlogRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", couponRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
