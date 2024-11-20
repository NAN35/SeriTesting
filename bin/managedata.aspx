<%@ Page Language="C#" AutoEventWireup="true" CodeFile="managedata.aspx.cs" Inherits="QryWindow" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Query Window</title>
    <script language ="javascript" type ="text/javascript" >
        function SplitAndReplace(actualvalue) {
            try {
                //alert('start');
                //var lname = document.getElementById('<%=QueryBox.ClientID %>').value;
                //actualvalue.value = '|' + actualvalue.value;
                actualvalue.value = '|' + actualvalue.value;

                var StringArray = new Array();
                var Convertedvalue = '';
                StringArray = actualvalue.value.split(' ');
                // alert('loopstart');
                for (i = 0; i < StringArray.length; i++) {
                    Convertedvalue = Convertedvalue + '|' + StringArray[i];
                }

                return actualvalue.value = Convertedvalue;
                //alert(Convertedvalue);
            }
            catch (e) {
                alert(e.message);
            }

        }
        </script>

</head>
<body bgcolor="aliceblue">
    <form id="form1" runat="server">
    <div>
    
    <table width="100%">
    <tr width="100%">
        <td colspan="2" style="text-align: center">
            <asp:Label ID="Label1" runat="server" Text="QUERY WINDOW" Font-Bold="true" Font-Size="22px" Font-Names="Calibri"></asp:Label>
        </td>
    </tr>
    
    <tr width="100%">
        <td colspan="2" style="text-align: right">
            <asp:Label ID="Label2" runat="server"  Font-Bold="False" Font-Size="16px" Font-Names="Calibri"></asp:Label>
        </td>
    </tr>
    
    <tr height="30px">
    </tr>
    
    <tr>
        <td colspan="2">
        <asp:TextBox ID="QueryBox" TextMode="MultiLine" Width="100%" Height="100px"  runat="server"></asp:TextBox>
        </td>
    </tr>
    
      <tr>
    <td width="50%" style="text-align: center">
        <asp:Button ID="btnExecute" runat="server" Text="Execute" OnClientClick="return SplitAndReplace(QueryBox)" OnClick="btnExecute_Click" />
    </td>
        <td width="50%" style="text-align: center">
            <asp:Button ID="btnLogout" runat="server" Text="Logout" OnClick="btnLogout_Click" />
        </td>
    </tr>
     <tr>
         <td colspan="2" style="text-align: center">
    <asp:Label ID="errLbl" ForeColor="Red" Visible="false"  runat="server" Text="Label"></asp:Label>
         </td>
    </tr>
    <tr>
         <td colspan="2" style="text-align: center">
         <asp:Button ID="btngdclear" runat="server" Visible="false" Text="Clear" OnClick="btngdclear_Click" />
        </td>
    </tr>
     <tr>
         <td colspan="2" style="text-align: center">
        &nbsp;<asp:GridView ID="GridView1" runat="server" BackColor="#DEBA84" BorderColor="#DEBA84"
                 BorderStyle="None" BorderWidth="1px" CellPadding="3" CellSpacing="2">
                 <RowStyle BackColor="#FFF7E7" ForeColor="#8C4510" />
                 <FooterStyle BackColor="#F7DFB5" ForeColor="#8C4510" />
                 <PagerStyle ForeColor="#8C4510" HorizontalAlign="Center" />
                 <SelectedRowStyle BackColor="#738A9C" Font-Bold="True" ForeColor="White" />
                 <HeaderStyle BackColor="#A55129" Font-Bold="True" ForeColor="White" />
             </asp:GridView>
         </td>
    </tr>
    
    </table>
    
    </div>
    </form>
</body>
</html>

