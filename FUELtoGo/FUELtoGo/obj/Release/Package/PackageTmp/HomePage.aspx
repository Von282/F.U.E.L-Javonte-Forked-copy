<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="FUELtoGo.HomePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script language="C#" runat="server">

      void ImageButton_Click(object sender, ImageClickEventArgs e) 
      {
         Response.Redirect("~/HomePage.aspx");
      }

   </script>
    <style type="text/css">
        *{
            margin:0;
            padding:0;
            font-family:'Lucida Bright', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-style:italic;
        }
        .headerBackground{
            background:url(Images/Header_Banner.png) no-repeat;
            height: 60px;
        }
        .topBanner{
            display:grid;
            grid-template-columns: 15% 65%; 
        }
        .topBannerRight{
            display:flex;
            justify-content:space-between; 
            align-items:center;
            padding:10px;
        }
        .addressNumber{
            text-decoration:none;
            color:white;
        }
        .addressNumber:hover,.navItem:hover{
            cursor:pointer;
            text-decoration:underline;
        }
        .name{
            font-size:40px;
            color:white;
        }
        .navbar{
            display:flex;
            align-items:center;
            justify-content:space-around;
            font-size:20px;
        }
        .navItem{
            color:white;
            text-decoration:none;
        }
        /*end of header*/
        .center{
            display:flex;
            padding:15px;
        }
        .bar1{
            justify-content:space-around; 
        }
        .video-wrap{
            justify-content:center;
            align-items:center;
            margin:auto;
            width:fit-content;
        }
        .image{
            justify-content:center;
            align-items:center;
        }
        .bar2{
            justify-content:space-around; 
        }
        .welcome{
            margin-bottom:20px;
            margin-top:20px;
            font-size:40px;
            text-align:center;
            font-style:italic;
        }
        .button:hover{
             background-color:#e9ecf0d1;
        }
        .button{
            width:150px;
            height:55px;
            border:none;
            border-radius:5px;
            background-color:#e9ecf0;
            font-size:17px;
            font-weight:600;
            cursor:pointer;
        }
        #Image1{
            border-radius:50px;
            
        }
        .content-wrapper{
            margin:auto;
            text-align:center;
        }
        .auto-style1 {
            height: -42px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
       <header>
        <div class="headerBackground topBanner">
            <asp:ImageButton ID="ImageButton1" runat="server" Height="60px" Width="100%" ImageUrl="~/Images/FUEL_Logo.png" OnClick="ImageButton_Click"/>
            <div class="topBannerRight">
                <asp:LinkButton class="addressNumber" runat="server" 
                OnClientClick="javascript:window.open('https://www.google.com/maps/place/Fuel+Farm+Rd,+Houston,+TX+77061/@29.6564643,-95.2849988,17z/data=!3m1!4b1!4m6!3m5!1s0x86409646e90f7787:0x8410c681013d931b!8m2!3d29.6564643!4d-95.2828101!16s%2Fg%2F1tjv3x3m');" 
                >888 Fuel Farm Road, Houston, TX 77888<br />888-555-5555</asp:LinkButton>
                <p class="name">FUEL to Go</p>
            </div>
        </div>
        <div class="headerBackground navbar">
            <a class="navItem" href="HomePage.aspx">Home</a>
            <a class="navItem" href="Quotes.aspx">Quotes</a>
            <a class="navItem" href="SignIn.aspx">Sign In</a>
            <a class="navItem" href="Register.aspx">Register</a>
        </div> 
    </header>
        <div>
            <section class="videoItem">
                <div class="video-wrap">
                    <h1 class="welcome">Quotes: Quick and Easy</h1>
                    <video autoplay="" muted="" loop="" playsinline="" class="loadVideo" width="1500">
                        <source data-src="https://assets.mixkit.co/videos/preview/mixkit-cars-passing-through-a-highway-at-night-27142-large.mp4" type="video/mp4" src="https://assets.mixkit.co/videos/preview/mixkit-cars-passing-through-a-highway-at-night-27142-large.mp4" />
                    </video>
                 </div>
                 <div class="container">
                     <div class="content-wrapper">
                         <h1>Fuel Ordering <span>Simplified<span> </span></span></h1>
                     </div>
                 </div>
            </section>
        </div>
    </form>
</body>
</html>