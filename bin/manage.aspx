<%@ Page Language="C#" AutoEventWireup="true" CodeFile="manage.aspx.cs" Inherits="QueryLogin" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
    <script language ="javascript" type ="text/javascript" >
   function isAlpha(e)
        {
            var key;       
        if(window.event) 
        { 
            key = window.event.keyCode;  
        } 
        else 
        { 
            key = e.which;       
        } 
        if (!((key >64 && key <=90) || (key >96 && key <=122) || (key > 47 && key <= 57))) 
        { 
            alert("Please Enter Only the Alphabets");
            return false; 
        } 
        }
        </script>
</head>
<body style="background-color:"#A2C0DA"" >
    <form id="form1" runat="server">
    
    <div>
        <table align =center cellpadding=1 cellspacing=1 bgcolor="aliceblue" width="100%">
        <tr height="50px">
        </tr>
        <tr height="22px">
            <td style="width: 293px">
            </td>
            <td width="20%" align="center" >
                &nbsp;</td>
            <td width="40%">
            </td>
        </tr>
        <tr>
        <td style="width: 293px">
            &nbsp;</td>
        </tr>
        <tr height="20px">
            <td style="width: 293px">
            </td>
            <td width="20%" bgcolor="#660033" align="center" >
                <asp:Label ID="Label1" Height="22px"  runat="server" Font-Names="Calibri" Font-Bold="True"  Text="QUERY LOGIN" ForeColor="White" Width="103px"></asp:Label>
            </td>
            <td width="40%">
            </td>
        </tr>
        <tr height="10px"></tr>
        <tr>
            <td style="width: 293px">
            </td>
            <td width="20%"  >
                <table width="100%">
                    <tr>
                        <td width="50%" align="right" >
                          <asp:Label ID="Label3"  runat="server" Font-Names="Calibri"  Height="22px" Font-Bold="True"  Text="User ID :"  Width="100%"></asp:Label>
                        </td>
                        <td width="50%">
                            <asp:TextBox ID="txtId"  runat="server" Width="150px"></asp:TextBox>
                        </td>
                    </tr>
                     <tr ></tr>
                    <tr>
                        <td width="50%" align="right" >
                          <asp:Label ID="Label4"  runat="server" Font-Names="Calibri" Height="22px" Font-Bold="True"  Text="Password :"  Width="100%"></asp:Label>
                        </td>
                        <td width="50%">
                            <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" Width="150px"></asp:TextBox>
                        </td>
                    </tr>
                     <tr ></tr>
                    <tr >
                        <td align="center"  >
                            
                        </td >
                        <td  align="center">
                            <asp:Button ID="Button1" runat="server" Text="Login" OnClick="Button1_Click" />
                        </td>
                       
                    </tr>
                    <tr >
                        <td align="center" colspan="2">
                           
                        </td>
                       
                       
                    </tr>
                    <tr >
                        <td colspan="2" align="center" >
                          <asp:Label ID="errLbl" Font-Names="Calibri" ForeColor="Red"  runat="server" Text="Label" Visible="false" ></asp:Label> 
                        </td>
                    </tr>
                </table>
                
            </td>
            <td align="center"></td>
        </tr>
        
        <tr align="center" >
            <td colspan="3">
                &nbsp;</td>

        </tr>
        <%-- <tr height="22px"></tr>
          <tr height="22px"></tr>
           <tr height="22px"></tr>
            <tr height="22px"></tr>
           <tr height="22px"></tr> 
           <tr height="40px"></tr>--%>
         
           
        </table>
        
    </div>
    </form>
</body>
</html>
