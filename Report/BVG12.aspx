<%@ page title="" language="C#" masterpagefile="~/Report/MajorAssetMymaster.master" autoeventwireup="true" inherits="BVG12, App_Web_bvg12.aspx.1933d7c" viewStateEncryptionMode="Always" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=10.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
    Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="Server">
    <link href="../css/Table.css" rel="stylesheet" />
    <script language="javascript" type="text/javascript">
        function isNumberKey(evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode
            if ((charCode < 48 || charCode > 57) || ((charCode == 32))) {

                return false;
            }
            return true;
        }

        function validateAddress(e) {
            var key;
            if (window.event) {
                key = window.event.keyCode; //IE 
            }
            else {
                key = e.which; //firefox       
            }
            if (!((key > 64 && key <= 90) || (key > 96 && key <= 122) || (key == 32) || (key == 35) || (key == 47) || (key > 47 && key <= 57) || (key == 8) || (key == 0) || (key == 127) || (key == 44) || (key == 46))) {

                return false;
            }
        }

        function isAlpha(e) {
            var key;
            if (window.event) {
                key = window.event.keyCode;
            }
            else {
                key = e.which;
            }
            if (!((key > 64 && key <= 90) || (key > 96 && key <= 122) || (key == 32) || (key == 46))) {

                return false;
            }


        }



        function isAlphaNumeric(e) {
            var key;
            if (window.event) {
                key = window.event.keyCode; //IE 
            }
            else {
                key = e.which; //firefox       
            }
            if (!((key > 64 && key <= 90) || (key > 96 && key <= 122) || (key > 47 && key <= 57) || (key == 8) || (key == 32))) {

                return false;
            }

        }
        function btnFIT_onclick() {

        }

        function onlyDotsAndNumbers(txt, event) {
            var charCode = (event.which) ? event.which : event.keyCode
            if (charCode == 46)
            {
                if (txt.value.indexOf(".") < 0)
                    return true;
                else
                    return false;
            }

            if (txt.value.indexOf(".") > 0) {
                var txtlen = txt.value.length;
                var dotpos = txt.value.indexOf(".");
                //Change the number here to allow more decimal points than 2
                if ((txtlen - dotpos) > 2)
                    return false;
            }

            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

            return true;
        }

    </script>

     <style type="text/css">
        #ctl00_MainContent_ReportViewer1
        {            
            width:100% !important;
            }
        #bgDiv
        {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            overflow: hidden;
            padding: 0;
            margin: 0;
            background-color: Black;
            filter: alpha(opacity=50);
            opacity: 0.5;
            z-index: 500;
        }
        
        #Progress
        {
            position: absolute;
            top: 50%;
            left: 300px;
            width: 300px;
            height: 50px;
            text-align: center;
            background-color: White;
        }
    </style>



    <style type="text/css">
        .style1 {
            width: 391px;
        }

        .style2 {
            color: #CC3300;
        }
    </style>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            font-family: Arial;
        }

        .modal1 {
            position: fixed;
            z-index: 999;
            height: 100%;
            width: 100%;
            top: 0;
            background-color: Black;
            filter: alpha(opacity=60);
            opacity: 0.6;
            /*moz-opacity: 0.8;*/
        }

        .center {
            z-index: 1000;
            margin: 300px auto;
            padding: 10px;
            width: 130px;
            background-color: White;
            border-radius: 10px;
            filter: alpha(opacity=100);
            opacity: 1;
            /*-moz-opacity: 1;*/
        }

            .center img {
                height: 128px;
                width: 128px;
            }

        .auto-style1 {
            font-size: xx-small;
        }
    </style>




    <style type="text/css">
        .auto-style1 {
            width: 137px;
        }

        .auto-style2 {
            width: 220px;
        }

        .auto-style3 {
            width: 266px;
        }

        .auto-style6 {
            width: 327px;
        }

        .auto-style7 {
            width: 526px;
        }

        .auto-style8 {
            width: 417px;
        }

        .auto-style9 {
            width: 341px;
            text-align: left;
        }

        .auto-style11 {
            width: 341px;
            text-align: center;
        }

        .auto-style12 {
            color: #000066;
        }

        .auto-style13 {
            color: #000066;
            font-size: small;
        }

        .auto-style16 {
            width: 417px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
        }

        .auto-style17 {
            width: 526px;
            background-color: #334760;
        }

        .auto-style18 {
            background-color: #334760;
        }

        .auto-style21 {
            width: 318px;
            text-align: center;
        }

        .auto-style22 {
            width: 318px;
            text-align: center;
            font-size: xx-large;
        }

        .auto-style23 {
            width: 318px;
            text-align: center;
            font-size: x-large;
        }

        .auto-style24 {
            width: 318px;
            text-align: center;
            font-size: xx-large;
            color: #CC66FF;
        }

        .auto-style25 {
            width: 220px;
            text-align: center;
        }

        .auto-style26 {
            font-size: xx-large;
        }

        .auto-style27 {
            font-size: x-large;
        }

        .auto-style28 {
            font-size: x-large;
            color: #660033;
        }

        .auto-style29 {
            color: #6600CC;
        }

        .auto-style30 {
            color: #993399;
        }

        .auto-style31 {
            width: 526px;
            color: #FFFFFF;
            background-color: #334760;
        }

        .auto-style32 {
            width: 526px;
            color: #FFFFFF;
            font-size: xx-large;
            background-color: #334760;
        }

        .auto-style33 {
            width: 526px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
        }

        .auto-style34 {
            width: 526px;
            color: #FFFFFF;
            font-size: xx-small;
            background-color: #334760;
        }

        .auto-style35 {
            width: 526px;
            color: #FFFFFF;
            font-size: x-large;
            background-color: #334760;
        }

        .auto-style36 {
            height: 25px;
        }

        .auto-style37 {
            width: 318px;
            text-align: center;
            font-size: xx-large;
            color: #333399;
        }

        .auto-style40 {
            color: #9999FF;
        }

        .auto-style43 {
            color: #000066;
            font-size: large;
            background-color: #000066;
        }

        .auto-style44 {
            width: 266px;
            font-size: large;
        }

        .auto-style45 {
            width: 264px;
        }

        .auto-style46 {
            width: 284px;
        }

        .auto-style47 {
            width: 299px;
        }

        .auto-style49 {
            width: 241pt;
        }

        .auto-style55 {
            width: 413px;
        }

        .auto-style56 {
            width: 294px;
        }

        .auto-style57 {
            width: 291px;
        }

        .auto-style58 {
            width: 290px;
        }

        .auto-style59 {
            width: 289px;
        }

        .auto-style60 {
            width: 288px;
        }

        .auto-style61 {
            width: 287px;
        }

        .auto-style62 {
            width: 257pt;
        }

        .auto-style63 {
            color: #FFFFFF;
            font-size: large;
            width: 511px;
            background-color: #000066;
        }

        .auto-style64 {
            width: 511px;
        }

        .auto-style65 {
            color: #FFFFFF;
            font-size: large;
            width: 507px;
            background-color: #000066;
        }

        .auto-style66 {
            width: 507px;
        }

        .auto-style67 {
            color: #FFFFFF;
            font-size: large;
            width: 504px;
            background-color: #000066;
        }

        .auto-style68 {
            width: 504px;
        }

        .auto-style69 {
            color: #FFFFFF;
            font-size: large;
            width: 502px;
            background-color: #000066;
        }

        .auto-style70 {
            width: 502px;
        }

        .auto-style71 {
            color: #FFFFFF;
            font-size: large;
            width: 501px;
            background-color: #000066;
        }

        .auto-style77 {
            text-align: center;
            font-size: x-large;
            width: 149px;
        }

        .auto-style79 {
            color: #FFFFFF;
            font-size: large;
            width: 284px;
            background-color: #000066;
        }

        .auto-style81 {
            color: #FFFFFF;
            font-size: large;
            width: 303px;
            background-color: #000066;
        }

        .auto-style82 {
            width: 303px;
        }

        .auto-style85 {
            color: #FFFFFF;
            font-size: large;
            width: 149px;
            background-color: #000066;
        }

        .auto-style39 {
            font-size: x-large;
            color: #3333CC;
        }

        .auto-style86 {
            font-size: x-large;
            color: #333399;
        }

        .auto-style87 {
            font-size: x-large;
            color: #333399;
            text-align: center;
            width: 245px;
        }

        .auto-style89 {
            background-color: #334760;
            width: 245px;
        }

        .auto-style90 {
            width: 245px;
            text-align: center;
        }

        .auto-style91 {
            width: 245px;
            text-align: center;
            font-size: x-large;
        }

        .auto-style92 {
            width: 200px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
        }

        .auto-style93 {
            width: 200px;
            text-align: center;
        }

        .auto-style94 {
            width: 370px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
        }

        .auto-style95 {
            width: 370px;
        }

        .auto-style96 {
            width: 417px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
            font-family: "Imprint MT Shadow";
        }

        .auto-style97 {
            width: 270px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
            text-align: center;
        }

        .auto-style98 {
            width: 270px;
            text-align: center;
        }

        .auto-style99 {
            width: 370px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #334760;
            font-family: "Imprint MT Shadow";
        }

        .auto-style100 {
            font-size: x-large;
            color: #000066;
        }

        .auto-style101 {
            font-size: x-large;
            color: #000066;
            text-align: center;
            width: 245px;
            background-color: #FFFFFF;
        }

        .auto-style102 {
            color: #000066;
            font-size: medium;
        }

        .auto-style103 {
            width: 245px;
            text-align: center;
            background-color: #FFFFFF;
        }

        .auto-style104 {
            width: 526px;
            background-color: #FFFFFF;
        }

        .auto-style105 {
            width: 417px;
            background-color: #FFFFFF;
        }

        .auto-style106 {
            width: 417px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #000066;
            text-align: center;
        }

        .auto-style107 {
            width: 526px;
            color: #FFFFFF;
            font-size: medium;
            background-color: #000066;
            text-align: center;
        }

        .auto-style108 {
            background-color: #000066;
            width: 245px;
        }

        .auto-style109 {
            width: 526px;
            height: 28px;
            background-color: #FFFFFF;
        }

        .auto-style110 {
            width: 417px;
            height: 28px;
            background-color: #FFFFFF;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="Server">
 
   <asp:UpdatePanel ID="UpdatePanel2" runat="server">
            <ContentTemplate>
            <div>
                   
                 <fieldset id="fieldset3" runat="server" align="center" style="border: solid 2px #9999FF;
                    margin: 5px; padding: 10px; background-color:White">
                    <legend><span class="style2" style="color:#05013e; font-weight: bold; font-size: 20px">
                        <b>ಮೊಟ್ಟೆಹಾಳೆ ದಾಸ್ತಾನು ಪುಸ್ತಕ</b></span> </legend>
                
                 <div class="form-group col-md-12" runat="server">
                     <div class="col-lg-4">
                         <label class="control-label col-sm-5" for="txtappliaadhar">
                             Financial Year</label>
                         <div class="col-sm-7">
                             <asp:DropDownList ID="ddlFinancialYear" CssClass="form-control" AutoPostBack="true" runat="server">
                             </asp:DropDownList>
                         </div>
                     </div>
                     
                     <div class="col-lg-4">
                         <label class="control-label col-sm-5" for="txtappliaadhar">
                        Grainage Name</label>
                         <div class="col-sm-7">
                             <asp:DropDownList ID="ddscheme" CssClass="form-control" AutoPostBack="true" runat="server" OnSelectedIndexChanged="ddscheme_SelectedIndexChanged">
                             </asp:DropDownList>
                         </div>
                     </div>
                  
                  
                        <div class="col-lg-2">
                           <asp:Button ID="btnDCBill" runat="server" CssClass="btn btn-success center-block" OnClick="btnDCBill_Click"
                                Text="View" Width="100px" />
                          
                          </div>
                        </div>
                     </fieldset>
                    </div>
                   
                     <div class="form-group col-md-12" id="Div2" runat="server">
                  
      <rsweb:ReportViewer ID="ReportViewer1" runat="server" CssClass="rpviewerparm" BackColor="#60759B">
    </rsweb:ReportViewer>

                    </div>
            
             </ContentTemplate>
             <Triggers>
                 <asp:PostBackTrigger ControlID="btnDCBill" />
               
                </Triggers>
        </asp:UpdatePanel>

 
    <%--</div>--%>
    <asp:HiddenField ID="hdnmatch_caste" runat="server" />
    <asp:HiddenField ID="hdnmatch_Income" runat="server" />
    <asp:HiddenField ID="hdncHobli" runat="server" />
    <asp:HiddenField ID="hdnCvillage" runat="server" />
    <asp:HiddenField ID="hdnCHabitation" runat="server" />
    <asp:HiddenField ID="hdnCVillageWardLabel" runat="server" />
    <asp:HiddenField ID="hdnvCAppTitle" runat="server" />
    <asp:HiddenField ID="hdncDateofIssue" runat="server" />
    <asp:HiddenField ID="hdnCDateofExp" runat="server" />
    <asp:HiddenField ID="hdnIHobli" runat="server" />
    <asp:HiddenField ID="hdnIvillage" runat="server" />
    <asp:HiddenField ID="hdnIHabitation" runat="server" />
    <asp:HiddenField ID="hdnIVillageWardLabel" runat="server" />
    <asp:HiddenField ID="hdnvIAppTitle" runat="server" />
    <asp:HiddenField ID="hdnIDateofIssue" runat="server" />
    <asp:HiddenField ID="hdnIDateofExp" runat="server" />
    <asp:HiddenField ID="hdnvR_ApplicantName" runat="server" />
    <asp:HiddenField ID="hdnvR_District" runat="server" />
    <asp:HiddenField ID="hdnvR_Taluk" runat="server" />
    <asp:HiddenField ID="hdnvR_PinCode" runat="server" />
    <asp:HiddenField ID="hdnvR_RYears" runat="server" />
    <asp:HiddenField ID="hdnvR_RMonths" runat="server" />
    <asp:HiddenField ID="hdnvR_TLIFileNo" runat="server" />
    <asp:HiddenField ID="hdnR_HobliName" runat="server" />
    <asp:HiddenField ID="hdnR_VillageName" runat="server" />
    <asp:HiddenField ID="hdnR_HabitatName" runat="server" />
    <asp:HiddenField ID="hdnR_ApplicantFatherName" runat="server" />
    <asp:HiddenField ID="hdnR_ApplicantMotherName" runat="server" />
    <asp:HiddenField ID="hdnR_DateOfissue" runat="server" />
    <asp:HiddenField ID="hdnR_ValidPeriod" runat="server" />
    <asp:HiddenField ID="hdnR_SignerName" runat="server" />
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SCSP %>"
        SelectCommand="SELECT [SectorCd], [SectorName] FROM [MstSector] ORDER BY [SectorCd]"></asp:SqlDataSource>
    <%--     </ContentTemplate>
           
        </asp:UpdatePanel>--%>

    <%--</div>--%>
</asp:Content>
