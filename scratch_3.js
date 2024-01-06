
<!DOCTYPE html>

<html id="ctl00_ctl00_htmlTag" xmlns="http://www.w3.org/1999/xhtml" lang="TR">
<head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" /><meta name="format-detection" content="telephone=no" /><meta name="description" content="Tüm bankaların hesap hareketlerinin tek ekranda görüntülenmesini ve yönetilmesini sağlar. Bayilerinizden kredi kartı ile tahsilat yapın. BulutTahsilat | Online Ödeme Sistemi." /><meta name="author" content="BulutTahsilat" />
    <!--[if lt IE 9]>
    <script src="/static_files/assets/global/plugins/respond.min.js"></script>
    <script src="/static_files/assets/global/plugins/excanvas.min.js"></script>
    <script src="/static_files/assets/global/plugins/ie8.fix.min.js"></script>
    <![endif]-->
    <!-- BEGIN CORE PLUGINS -->



    <script src="/static_files/js/jquery-3.6.0.js"></script>
    <script src="/static_files/js/jquery-migrate-3.3.2.js"></script>
    <script src="/static_files/assets/global/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>

    <script src="/static_files/assets/global/plugins/bootstrap3.4.1/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="/static_files/assets/global/plugins/js.cookie-3.0.1.min.js" type="text/javascript"></script>
    <!-- END CORE PLUGINS -->
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="/static_files/css/font.css" rel="stylesheet" /><link rel="stylesheet" href="/static_files/css/all.min.css" /><link href="/static_files/assets/global/plugins/font-awesome/css/font-awesome.min.css?v=2" rel="stylesheet" type="text/css" /><link href="/static_files/assets/global/plugins/bootstrap3.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" /><link href="/static_files/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->

    <!-- BEGIN THEME GLOBAL STYLES -->
    <link id="ctl00_ctl00_style_components" href="/static_files/assets/global/css/components-md.min.css" rel="stylesheet" type="text/css" />
    <!-- END THEME GLOBAL STYLES -->
    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="/static_files/assets/layouts/layout4/css/layout.min.css" rel="stylesheet" type="text/css" /><link id="ctl00_ctl00_style_color" href="/static_files/assets/layouts/layout4/css/themes/light.min.css" rel="stylesheet" type="text/css" /><link href="/static_files/assets/global/plugins/amcharts/amcharts/plugins/export/export.css" rel="stylesheet" />
    <!-- END THEME LAYOUT STYLES -->
    <script src="/static_files/js/gridviewScroll.js?v=2"></script>
    <link href="/static_files/css/component.css?v=2" rel="stylesheet" /><link href="/static_files/css/style.css?v=1" rel="stylesheet" />
    <title>BulutTahsilat</title>


<script src="/static_files/js/highslide-full.js" type="text/javascript"></script>

<link href="/static_files/css/highslide.css" rel="stylesheet" type="text/css" />
<link href="/static_files/css/highslide-ie6.css" rel="stylesheet" type="text/css" />

<script type="text/javascript">
    hs.graphicsDir = '/static_files/images/imageviewer/graphics/';
    hs.outlineType = 'drop-shadow';
    hs.showCredits = false;
    hs.wrapperClassName = 'draggable-header';
    hs.allowSizeReduction = false;
    hs.expandCursor = 'hand.cur';
    hs.lang =
                {
                    cssDirection: 'ltr',
                    loadingText: 'Yükleniyor...',
                    loadingTitle: 'Yüklemeyi iptal et',
                    focusTitle: 'Büyük halini görmek için tıklayın',
                    fullExpandTitle: 'Orjinal boyuta getir (f)',
                    creditsText: '',
                    creditsTitle: '',
                    previousText: 'Önceki',
                    nextText:  'Sonraki',
                    moveText:  'Taşı',
                    closeText: 'Kapat',
                    closeTitle:  'Kapat (esc)',
                    resizeTitle:  'Boyutlandır',
                    playText: '',
                    playTitle: '',
                    pauseText: '',
                    pauseTitle: '',
                    previousTitle: '',
                    nextTitle: '',
                    moveTitle:  'Taşı',
                    fullExpandText: 'Tam ekran',
                    number: '',
                    restoreTitle:  'Tam ekran',
                }
</script>






    <script src="/static_files/assets/global/plugins/bootstrap-sessiontimeout/bootstrap-session-timeout.js" type="text/javascript"></script>
    <script>

        function handlesessionTimeout() {
            $.sessionTimeout({
                title: 'Süre Aşımı',
                message: 'Uzun süre işlem yapmadınız.',
                redirUrl: 'https://portal.buluttahsilat.com/UserLogin.aspx?wk=49339298ed03c0c2467e19fdb03c8861dcf0cf07&logouttype=1',
                logoutUrl: 'https://portal.buluttahsilat.com/UserLogin.aspx?wk=49339298ed03c0c2467e19fdb03c8861dcf0cf07&logouttype=3',
                keepAliveUrl:'https://portal.buluttahsilat.com/Public/KeepAlive.aspx',
                warnAfter: 3300000, //warn after x miliseconds
                redirAfter: 3600000, //redirect after y milisecons,
                ignoreUserActivity: true,
                countdownMessage: 'Kalan süre: {timer}',
                countdownBar: true,
                logoutButton: 'Çıkış Yap',
                keepAliveButton: 'Sayfada Kal',
                countdownSmart: true
            });
        }



        // Eski masterpass tanıtımı ve ekrandaki blur effect




        function menuToggler(){
            document.getElementById('ctl00_ctl00_maincontent_lnkMenuToggler').click();
       }

       //$('.MasterpassDemo').tooltip();

    </script>

    <script type="text/javascript">

        function addSeparator(fldID) {
            var posCaret = getPosition(fldID);
            var fldVal = fldID.value;
            if ((fldVal.length === 3 || 7 || 11) && (fldVal.length === posCaret)) {
                posCaret = posCaret + 1;
            }
            nStr = fldVal.replace(/\./g, '');
            nStr += '';
            x = nStr.split(',');
            x1 = x[0];
            x2 = x.length > 1 ? ',' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
            }
            fldID.value = x1 + x2;
            setCaretPosition(fldID, posCaret);

        }

        function getPosition(amtFld) {
            var iCaretPos = 0;
            if (document.selection) {
                amtFld.focus();
                var oSel = document.selection.createRange();
                oSel.moveStart('character', -amtFld.value.length);
                iCaretPos = oSel.text.length;
            }
            else if (amtFld.selectionStart || amtFld.selectionStart == '0')
                iCaretPos = amtFld.selectionStart;
            return (iCaretPos);
        }

        function replaceSeperator(txtBox) {
            txtBox.blur();
            txtBox.value = txtBox.value.replace(/\./g, ',').replace(/\,,/g, ',').replace(/\,,,/g, ',').replace(/\,,/g, ',');
            if (txtBox.value == ',') {
                txtBox.value = txtBox.value.replace(/\,/g, '');
            }
            txtBox.focus();
        }


        function CheckBoxSpanOnChange(spanElem) {
            CheckBoxOnChange($(spanElem).find('input').first());
        }

        function CheckBoxOnChange(elem) {
            if ($(elem) != null && $(elem) != 'undefined') {

                var elemId = $(elem).attr('id');

                if (elemId.includes("freezeitem")) {
                    if ($(elem).prop('checked')) {

                        $('#' + elemId.replace('_freezeitem', '')).attr('checked', 'checked');
                    }
                    else {

                        $('#' + elemId.replace('_freezeitem', '')).removeAttr('checked');
                    }
                }
                else {
                    if ($(elem).prop('checked')) {

                        $('#' + elemId + '_freezeitem').attr('checked', 'checked');
                    }
                    else {

                        $('#' + elemId + '_freezeitem').removeAttr('checked');
                    }

                }
            }
            __doPostBack('ctl00$ctl00$maincontent$content$lnkPostBack', '');
        }

        function CheckBoxHeaderChanged() {

            var checkboxes = document.querySelectorAll('#ctl00_ctl00_maincontent_content_grdList_ctl01_chckBoxHeader');
            var mainChecked = $(checkboxes[0]).prop('checked');

            for (var i = 0; i < checkboxes.length; i++) {
                if (mainChecked) {
                    $(checkboxes[i]).prop('checked', false);
                }
                else {
                    $(checkboxes[i]).prop('checked', true);
                }
            }

            var rowchkSpan = document.querySelectorAll('.GridRowCheckBox');

            for (var i = 0; i < rowchkSpan.length; i++) {
                var rowchk = $(rowchkSpan[i]).find('input').first();

                if (mainChecked) {
                    $(rowchk).prop('checked', false);
                }
                else {
                    $(rowchk).prop('checked', true);
                }
            }
            __doPostBack('ctl00$ctl00$maincontent$content$lnkPostBack', '');
        }


        function fillForm(did, fillFormType) {
            var url = "https://portal.buluttahsilat.com/Common/DocFillForm.aspx?did=" + did + "&fillFormType=" + fillFormType;
            window.open(url);
        }
        function FillDekontForm() {
            fillForm("5b931c03-516f-48f3-b752-f2fce4ae53bf", "d85f6336-57d2-4025-996e-e244102783ed");
        }


    </script>





    <script src="/static_files/js/bootstrap-multiselect.js" type="text/javascript"></script>
    <link href="/static_files/css/bootstrap-multiselect.css" rel="stylesheet" type="text/css" /><link href="/static_files/css/SwitchButton.css?v=3" rel="stylesheet" /><link id="ctl00_ctl00_subDomainDynamicStyleSheet" rel="stylesheet" href="/static_files/css/domain_css/portal.buluttahsilat.com.css?v=4" />

    <script type="text/javascript">
        var ClickCount = 0;
        function CheckDoubleClick() {

            if (document.activeElement.attributes["class"].value == 'NoDoubleClickCheck') {
                return; //no double click check
            }
            if (typeof (Page_IsValid) == 'undefined' || (Page_IsValid)) {
                ClickCount = ClickCount + 1;
                //show please wait
                document.getElementById("loadingWrapper").className = 'LockOn';
                document.getElementById("loading").className = 'LockOnLoading';


                if (ClickCount > 1) {
                    var alertText = document.getElementById("alertText");
                    alert(alertText.innerHTML);
                    return false;
                }
            }
        }

        function ResetDoubleClick() {
            ClickCount = 0;
            document.getElementById("loadingWrapper").className = 'LockOff';
            document.getElementById("loading").className = 'LockOffLoading';
        }
    </script>
<link href="../App_Themes/Default/SoftGreyGridView.css" type="text/css" rel="stylesheet" /><link href="/WebResource.axd?d=hcXDZhXiidgsQUtEo5iT39PA0j2wH-oBT9VeLqiTNM745P-Cj2_l95pj8ZCxfKMi091px23fQCY-dSJgJsfFIAARA1eH1CYZRrL77OG1Bxzg3anUOCUZRewHybi13_NoooqPa441nqfAzrOPbHJ7CKe1g-Q1&amp;t=638242422354774431" type="text/css" rel="stylesheet" /><link href="/WebResource.axd?d=-H-7euyzCq22q5_s0z2InMmz-ARJhkchEoiaEvb0C3iT7HQPwKKV2pxXP9TyszgVlc7cOZe4u0bU-pFOvQXOpy9jycCLHR6-GHkbiNVxSi-V6JO5gHDLS6ywsI-9iIkCo-BHZA2&amp;t=638242422354774431" type="text/css" rel="stylesheet" /><title>

</title></head>
<body id="ctl00_ctl00_body" class="page-md page-header-fixed page-sidebar-closed-hide-logo page-sidebar-closed-hide-logo">
    <form method="post" action="./PaymentList.aspx" onsubmit="javascript:return WebForm_OnSubmit();" id="aspnetForm" class="form-horizontal" role="form">
<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZJ_c3qw5fq1XFo6MSypo5n96NSOUQU6BoAI5XHsA8_4aqWsBEw2&amp;t=638240451755514788" type="text/javascript"></script>


<script src="/ScriptResource.axd?d=nv7asgRUU0tRmHNR2D6t1IBw-QN84nj88aCYIJaCx0D0YwFmVGM7C4OqBlK5uhdEAmc-LppwAEZXmgfmhwqtBlqtaZnezFoX8OjXzJVeqAObFCR-bwG3xPZJ1zwFefYWDVzISg2&amp;t=2a5257eb" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
var __cultureInfo = {"name":"tr","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":",","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":".","CurrencySymbol":"₺","NaNSymbol":"NaN","CurrencyNegativePattern":1,"NumberNegativePattern":1,"PercentPositivePattern":2,"PercentNegativePattern":2,"NegativeInfinitySymbol":"-∞","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":",","NumberGroupSeparator":".","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"∞","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":",","PercentGroupSeparator":".","PercentSymbol":"%","PerMilleSymbol":"‰","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"ÖÖ","Calendar":{"MinSupportedDateTime":"\/Date(-62135596800000)\/","MaxSupportedDateTime":"\/Date(253402289999999)\/","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":".","FirstDayOfWeek":1,"CalendarWeekRule":0,"FullDateTimePattern":"d MMMM yyyy dddd HH:mm:ss","LongDatePattern":"d MMMM yyyy dddd","LongTimePattern":"HH:mm:ss","MonthDayPattern":"d MMMM","PMDesignator":"ÖS","RFC1123Pattern":"ddd, dd MMM yyyy HH\u0027:\u0027mm\u0027:\u0027ss \u0027GMT\u0027","ShortDatePattern":"dd.MM.yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\u0027-\u0027MM\u0027-\u0027dd HH\u0027:\u0027mm\u0027:\u0027ss\u0027Z\u0027","YearMonthPattern":"MMMM yyyy","AbbreviatedDayNames":["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],"ShortestDayNames":["Pa","Pt","Sa","Ça","Pe","Cu","Ct"],"DayNames":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],"AbbreviatedMonthNames":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara",""],"MonthNames":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",""],"IsReadOnly":false,"NativeCalendarName":"Miladi Takvim","AbbreviatedMonthGenitiveNames":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara",""],"MonthGenitiveNames":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",""]},"eras":[1,"MS",null,0]};//]]>
</script>

<script src="/ScriptResource.axd?d=NJmAwtEo3Ipnlaxl6CMhvucLfKGG8TkB6JAcXIeknfokxXSxd26N7qnRDqZN_GRpxYPH9FodrOF-Y8vcFsm914AYm8u12dXTAHqOD9zTgVqwN1UuOyxyKHjo-d9wlSc16JERTjfuSWjwGM-7TJyxynkuqbw1&amp;t=96346c8" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=dwY9oWetJoJoVpgL6Zq8OKSHH13NckLjmOe0FtRL0y7mUfk-uiVvZW-nFgqeX9aNlpxsDNEfY6lwrUcrEGiIIXUqlphyW8IEFYoq26jsQruQDWILtEAvHfE_-JWIBebJlwUavqa35AiLD5nTpsMDoGBLmZQ1&amp;t=96346c8" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=Xz2vUBiw-iW_eTyhK3lS4ezLbSloNDoLHwM9LFF0jUnWGKaT51FPs5Xq_ZUDHXncMvn4ymTkIjqV79vgY0s_nL-OLmvnYX-BW5KTL0G4ijTzjdbr2iFFi8rMU_hAPYSCGvHd-HZnOAbX7hJG6lg9KxYZSBE1&amp;t=96346c8" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=eE6V8nDbUVn0gtG6hKNX_HS956ZR9p2I1Msl1ExHqXjoNGpL4Y5E-tk9-PmGhjgFBnr4ZjKBLDf4Cb2cnv5gx3QtT_o3Srp6iS7-4dTR9aUQp_SZ0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=YHwlFrYKwppzg-S-6P-f5hF_JDTO0o_wDuOBswpUC5W_fMh00TpkRCj8xkgGUD6Zw_01oP0JAHaYFiu1W63YKDHIizA7VEU3g6wiWZhKvZ_tsOwsllYvQQkZnW8gsCjYcCwCHA2&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=HEFpVKbnoeQjkjHkFKu3MCiLW4jFWlHO8u26dY2tn9l576uY8wTlkUv4W-n7MjQ-Diua55ybEMGjTlFEDpZVdx6oJ1OjTz3-lZi0OJKDju9Wu6gs0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=SgaKUsUy6mYFhfiO6UONDxdjzBwyuUwrC_NJIPa1yhjTtNATJmfGgYbgKgdA3H3m9hWnAikTdGMfR0F7v1BYcDvppXNDssp87IcirRUCJYcYQnim0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=jwf4VSQi7LeShc44FJ-gATKRhp2azZ937SNezjn3l_-rk_1Jd51_yW_GZvHnP6B0ClEe4bjgYkRxR7Of7t4NZ_6RoKremlzfXHNzHd7LVETXjxIj0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=mcAASOSteirJeuV-3by3Uf19Yv3g2G6OwlIm6iB7MmQ3ykhSMRtQgrg15znJpzavWdB0DyQWs6DFgZt9FfrGP-1m-kA1&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=nai7mGcYyE2dix_TwveLDTbErKEbXWKyRLe6ZvnAhiO3TED_Ai-aSO3Nqiw3DpefESQw1go8yuLvWlwh_yDZ4go-jEfsoRX0pn7_g5__ZRpkiVXO0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=LQ1q2RBSthBAZhliMjtG_9R2oPZMN5cyzKTCN16Xc0fgGWrRiuvLVpibtbTRtnpEK8LblPdIz6MBr_DSQpVs6WAenr9qODHkV2MqQ7vgrN7LuCyl0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=VOYD8Xe7kQA0lniBYXVpAvOOU6xEtfQEKvxw4a9Qfl6_FPF7WkfHTtKVoH_vRFGjSKk7LP4vTTGbSaPLSz9luWkXwmY5yo2FJCCr6grROOG0HrO50&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=yDT7ulzE00Yqzs5zd38bJ0wztCD4bAJqXnmykXfgzTnbKJjawroKvHgicV4wFzK34fGLVEtKEYZ45YFQ4tkzBtj02hXkSo6bwvwElEoAD7-lsbwx0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=5ib3lCcyinHeLQmkwMF7Egm155LkJMKqEbeEqNvLpFgH5e-zn8wLqycFcVWbIGl-REfB6TcuhYARjapTlVqF0jDbINGPocCw6E7WqtH4sDVVs5oU0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=iON9Jxe8QCRam1nkdNLgkXrNUlKBmLlt6p6kF8P7KeaEu0b5hvYBEhX3p7uukvaP0w0_tFz0xBkjTSj9gg8YfSJWmGiwl1VaNEmkcRRj1GlQAGhp0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=xGmPTKfsNy0_1Sr5I58kO18irRxn5Flh2iXA23lVE4bUOdyupMy1-Z0ZHenpg-z1QILOE3ys15CKR-3NWmcX7qeroPlg_zEuem3MG6BIJhj2Wp0-0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=hOeJu0xhC-uW6Gf8ooKdXlRo5UbfYmwalRSqSakZRPuWdLM6eCiaaHoeyzs9wN5e-MVnjf4llZJ5JjFsC5rWIAEGG2tS776QRdvdQw0JeNYg68yP0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=XlV9GqTk6b5uqDuL38kZ4JceclAmjFdrRFoyHNRokz4smg9BybT_bEcRl4xGYI1JqHz_ptZuFqpWrDpVTcxninYiSqrF89pl_VYQcJ21yoKr9oUI0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=V9BZfzKzDCsxAStwHbjCaJkTUQetPfEBg6h8753QLmKMy5IHu7ZepwjyK9PZTiHSCbQnXxVtkRNsslvo7rig9a-eSPo4p1DvVoCMMARGSOKu3n1x0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=uiErWUqGhD5_ddnGX4Xq_kSPjDJvW5BVy3wZCMzic0oXWhN1PLSPWOii3c4usi_ddcwOUWzvFw4zjO0ih0jnJjRLB0Bd56f4D0VDMV5F5tfLsqcm0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=24039AtbfhsNBYQDFUMYHDfk3x1aj9t66AaiqLFXDw4KA8d2LEH_TBWaKxCTJRYajTaxwItESgrTTSc_CLFPXs1DQHU1&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=myBlz7mQmGQE80F8-WeLsV6oSRWe9XeuWHgU7tTiAA79WMbQ1Qy_-WY_5S_OJ3NOtPz11a-GeZzKhOmmBsodCpkd51NgoJ2pvN5L_6NmRQtGOpZS0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=NISXSzp87hD3qcCkP6NEPvJGGUGM8HrblJxfJT5nBcKh6o1HQvqBUShwjbZ5bWGNIxDMwS2bfKkxAUiOSAt2N-Jd-bdUVpHmyyIZ61kE5wY_1joh0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=k9W6WtsgU2g6TbhWgWI8JQcUUCDPVDmqHsHQqU2YEI21C5TeOpH70K8W3pujjjr33KAt68LbaQZbQZIzHm3RGSBkbz7tO1rzU_WTqT8Q75AkDTGB0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=HdoSyj8kf2_mMLr0r0SEinCW_j_J4c_TONZvcU7chDAItknear_lifvfpBuwJ_nhhPVc-1rOZ7vpC_49h-18gGX1M7_S1M_c3babf1Z0ToV8PoLg0&amp;t=ac64ff3" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=yFN8H9hq0hejoFW9beRmotxquJIeMgo6R6RRfHpCJFZGhE_IVdX3dmU9c8wzrOPE3a0HGumo-7omYZKEeXFRVPnfJW7TwYqWhIc4Rhu4pU-ZQ7Km0&amp;t=ac64ff3" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
function WebForm_OnSubmit() {
null;if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;
return true;
}
//]]>
</script>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="B34A2173" />
	<input type="hidden" name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="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" />
</div>
        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$ctl00$ScriptManager1', 'aspnetForm', ['tctl00$ctl00$maincontent$UCFavoriteMenuV2$updateFavoriMenu','','tctl00$ctl00$maincontent$UCFavoriteMenuV2$upModalContent','','tctl00$ctl00$maincontent$ctl00','','tctl00$ctl00$maincontent$content$UpdatePanel1','','tctl00$ctl00$maincontent$content$UpdatePanel2','','tctl00$ctl00$maincontent$content$ucMailLookup$upOptions','','tctl00$ctl00$maincontent$content$upBulkSelectedPayment','','tctl00$ctl00$maincontent$content$ucFirmLookup$upSelectedDealer','','tctl00$ctl00$maincontent$content$ucFirmLookup$upDealers','','tctl00$ctl00$maincontent$content$upBulkUpdates','','tctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$upSelectedDealer','','tctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$upDealers',''], ['ctl00$ctl00$maincontent$content$drpSelectedPaymentStatusType',''], ['ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl02$LinkButton1','','ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl03$LinkButton1','','ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl04$LinkButton1','','ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl05$LinkButton1','','ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl06$LinkButton1',''], 90, 'ctl00$ctl00');
//]]>
</script>




    <!-- BEGIN HEADER -->
    <div class="page-header md-shadow-z-1-i navbar navbar-fixed-top">
        <!-- BEGIN HEADER INNER -->
        <div class="page-header-inner">
            <!-- BEGIN LOGO -->
            <div class="page-logo">

                <a href="#">
                    <img src='/static_files/images/headerleft_small.svg' alt="logo" class="logo-default" />
                </a>
                <div class="menu-toggler sidebar-toggler" onclick="menuToggler();">
                </div>
            </div>

<script>
    function RemoveButtonVisible() {
        $('.favmenu-remove').css("display", "block");
    }

    $(document).ready(function () {
        $('.page-container').click(function () {
            $('.favmenu-remove').css("display", "none");
        });
    });

</script>
<style>
    .alert-success, .alert-success > i {
    color: #27a4b0 !important;
}

        .alert-danger, .alert-danger > i {
    color: #e73d4a !important;
}
</style>
<div id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_updateFavoriMenu" class="mini-favmenu">

        <div class="mini-favori-menu">


                    <div class="tooltips" data-original-title="Hesap Hareketleri" data-container="body" data-placement="auto bottom">
                        <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl00_hypMenuLink" href="PaymentList.aspx"><img id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl00_imgMenu" class="favmenu-img" src="/static_files/images/menu/default/F_7_hesap_islemleri_15_hesap_hareketleri.png" /></a>
                        <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl00_lnkDelete" class="favmenu-remove" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$rptFavoriMenu$ctl00$lnkDelete&#39;,&#39;&#39;)"> <i class="fa fa-times"></i></a>

                    </div>


                    <div class="tooltips" data-original-title="Cari Listesi" data-container="body" data-placement="auto bottom">
                        <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl01_hypMenuLink" href="FirmList.aspx"><img id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl01_imgMenu" class="favmenu-img" src="/static_files/images/menu/default/F_12_cari_islemleri_11_cari_listesi.png" /></a>
                        <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl01_lnkDelete" class="favmenu-remove" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$rptFavoriMenu$ctl01$lnkDelete&#39;,&#39;&#39;)"> <i class="fa fa-times"></i></a>

                    </div>

        </div>
        <div class="dropdown" style="width: auto; float: left">
            <button id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_dropdownMenu1" aria-expanded="true" data-placement="auto bottom" class="btn dropdown-toggle nav-Button tooltips favmenu-update" data-original-title="Favori Menü Düzenle" style="background: linear-gradient(-90deg, #3cabd8, #5dd7c9);
    color: white !important;" aria-haspopup="true" type="button" data-container="body" data-toggle="dropdown">
                <i class="fa fa-edit" style="font-size: 1.8rem;"></i>

            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                    <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_lnkAddFavMenu" class="dropdown-favorite-add" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$lnkAddFavMenu&#39;,&#39;&#39;)"> <i class="fa fa-plus "></i> &nbsp; Ekle</a></li>
                <li><a href="#" onclick="RemoveButtonVisible()"  class="dropdown-favorite-remove"> <i class="fa fa-times"></i>&nbsp; Çıkar</a></li>
            </ul>
        </div>



</div>


<a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_dummyButton" UseSubmitBehavior="false" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$dummyButton&#39;,&#39;&#39;)"></a>


<div id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_pnlClCard" class="modal-dialog" onkeypress="javascript:return WebForm_FireDefaultButton(event, &#39;ctl00_ctl00_maincontent_UCFavoriteMenuV2_btnSearch&#39;)" style="display: none; z-index: 1;">

   <div class="modal-content">
        <div class="modal-header">
            <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_lnkClose" class="close" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$lnkClose&#39;,&#39;&#39;)"></a>
            <h4 class="modal-title">
                <span id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_lblHeader" class="msg">Menu Listesi</span>
            </h4>

        </div>
        <span id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_upModalContent">

                <div class="modal-body">
                    <div>
                        <div class="row">
                            <div class="FieldHeader col-md-2">
                                 Menu Adı
                            </div>
                            <div class=" col-md-10">
                                <input name="ctl00$ctl00$maincontent$UCFavoriteMenuV2$txtMenu" type="text" id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_txtMenu" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 margin-top-10 margin-bottom-10">
                                 <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_btnSearch" class="btn btn-default" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$btnSearch&#39;,&#39;&#39;)" style="color:#3598dc">Listele</a>
                            </div>
                        </div>
                    </div>
                    <div>
		<table class="table table-striped table-bordered table-hover" cellspacing="0" rules="all" border="1" id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList" style="width:100%;border-collapse:collapse;">
			<tr>
				<th scope="col">Menu Adı</th>
			</tr><tr>
				<td>
                                    <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList_ctl02_LinkButton1" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl02$LinkButton1&#39;,&#39;&#39;)">Online Banka - Hesap Hareketleri</a>
                                </td>
			</tr><tr>
				<td>
                                    <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList_ctl03_LinkButton1" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl03$LinkButton1&#39;,&#39;&#39;)">Online Banka - Hesap Listesi</a>
                                </td>
			</tr><tr>
				<td>
                                    <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList_ctl04_LinkButton1" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl04$LinkButton1&#39;,&#39;&#39;)">Online Banka - Cari Raporu</a>
                                </td>
			</tr><tr>
				<td>
                                    <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList_ctl05_LinkButton1" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl05$LinkButton1&#39;,&#39;&#39;)">Cari - Cari Listesi</a>
                                </td>
			</tr><tr>
				<td>
                                    <a id="ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList_ctl06_LinkButton1" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$UCFavoriteMenuV2$grdList$ctl06$LinkButton1&#39;,&#39;&#39;)">Ayarlar - Şifre Değiştirme</a>
                                </td>
			</tr><tr>
				<td><table style="border-width:0px;width:100%;">
					<tr>
						<td align="left" style="width:1px;"><span>Sayfa: </span></td><td align="left"><table>
							<tr>
								<td><span>1</span></td>
							</tr>
						</table></td><td align="right"><span>Kayıt: 1 - 5 / 5</span></td>
					</tr>
				</table></td>
			</tr>
		</table>
	</div>



                </div>
            </span>
    </div>

</div>




            <!-- END LOGO -->
            <!-- BEGIN RESPONSIVE MENU TOGGLER -->
            <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"></a>
            <!-- END RESPONSIVE MENU TOGGLER -->
            <div id="ctl00_ctl00_maincontent_ctl00">

                    <a onclick="ResetDoubleClick();" id="ctl00_ctl00_maincontent_lnkMenuToggler" class="display-none" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$lnkMenuToggler&#39;,&#39;&#39;)"></a>



</div>
            <!-- BEGIN PAGE TOP -->
            <div class="page-top">

                <!-- BEGIN TOP NAVIGATION MENU -->
                <div class="top-menu">
                    <a id="ctl00_ctl00_maincontent_lnkThemeChange" class="ThemeChangeSwitch" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$lnkThemeChange&#39;,&#39;&#39;)"></a>
                    <ul class="nav navbar-nav pull-right">

                        <li id="ctl00_ctl00_maincontent_liLanguage" class="dropdown text-right" title="TÜRKÇE">
                            <div class="dropdown" style="background: none; border: none; box-shadow: none;">
                                <a class="btn dropdown-toggle languageButton" style="border: none; box-shadow: none; padding-top: 13px;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i style="font-size: 2.5rem;" class="fa fa-globe" aria-hidden="true"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menuNew" style="min-width: 119px; padding: 1.5rem; line-height: 2; font-size: 11px;" aria-labelledby="dropdownMenuButton">


                                            <a id="ctl00_ctl00_maincontent_rptLanguage_ctl00_lnkLanguage" class="dropdown-item" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$rptLanguage$ctl00$lnkLanguage&#39;,&#39;&#39;)">TÜRKÇE
                                              <img style="position: relative;float: right;padding-top: 2px;" width="25" src='/static_files/images/icons/turk.svg' />

                                            </a>



                                            <a id="ctl00_ctl00_maincontent_rptLanguage_ctl01_lnkLanguage" class="dropdown-item" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$rptLanguage$ctl01$lnkLanguage&#39;,&#39;&#39;)">İNGİLİZCE
                                              <img style="position: relative;float: right;padding-top: 2px;" width="25" src='/static_files/images/icons/ingilizce.png' />

                                            </a>



                                </div>
                            </div>
                        </li>
                        <!-- BEGIN NOTIFICATION DROPDOWN -->

                        <!-- BEGIN USER LOGIN DROPDOWN -->


                        <li class="dropdown text-right">
                            <span id="ctl00_ctl00_maincontent_lblFirmName" class="username-hide-on-mobile firmcode">EKMERT TÜTÜN</span><br />
                            <span id="ctl00_ctl00_maincontent_lblUserFullName" class="username username-hide-on-mobile">EMRE YILMAZ</span>
                        </li>

                        <!-- BEGIN USER LOGIN DROPDOWN -->
                        <li class="dropdown dropdown-user dropdown-dark">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">

                                <img src="/static_files/images/avatar.png" id="ctl00_ctl00_maincontent_imgUserPhoto" class="imgUserPhoto" onerror="this.src=&#39;/static_files/images/avatar.png&#39;" alt="Profil Resmi" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-default">


                                <li class="tooltips" data-container="body" data-placement="auto left" data-original-title="PROFİL">
                                    <a id="ctl00_ctl00_maincontent_hypLinkUserSetting" href="UserAddNew.aspx?taskType=3" style="cursor: pointer;">
                                        <i class="fa fa-cog"></i>
                                        <span>   PROFİL</span></a>
                                </li>
                                <li id="ctl00_ctl00_maincontent_liDarkMode" class="tooltips" data-container="body" data-placement="auto left" data-original-title="DARK MODE">


                                    <a><i class="fa fa-adjust"></i>
                                        <span>DARK MODE</span>
                                        <div style="float: right">
                                            <center>


<script type="text/javascript">

</script>
<style type="text/css">
    .onoffswitchThemeChangeSwitch{
        position: relative;
        width: 35px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

.ThemeChangeSwitch {
    display:none;
}

</style>


<div class="float-left">
    <div class="float-left" visible='False'>
        <label style="vertical-align: middle;"></label>
    </div>
    <div class="float-left" style="width: 41px !important">
        <div class="onoffswitchThemeChangeSwitch">
            <input  type="checkbox"  class="onoffswitch-checkbox" id="myonoffswitchThemeChangeSwitch" onchange='switchChange("ThemeChangeSwitch")' />
            <label class="onoffswitch-label" for="myonoffswitchThemeChangeSwitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
            </label>
        </div>
    </div>

</div>


                                           </center>
                                        </div>
                                    </a>

                                </li>


                                <li class="tooltips" data-container="body" data-placement="auto left" data-original-title="KULLANICI ADI">
                                    <a><i class="fa fa-user"></i>
                                        <span id="ctl00_ctl00_maincontent_lblUserName" style="white-space: normal !important">EMRE.YILMAZ</span></a>
                                </li>
                                <li class="tooltips" data-container="body" data-placement="auto left" data-original-title="SON GİRİŞ TARİHİ">
                                    <a>
                                        <i class="fa fa-calendar"></i>
                                        <span id="ctl00_ctl00_maincontent_lblLastLoginDate" style="white-space: normal !important">06.01.2024 22:07</span></a>
                                </li>

                                <li class="tooltips" data-container="body" data-placement="auto left" data-original-title="ÇIKIŞ">
                                    <a id="ctl00_ctl00_maincontent_lnkMenuLogOut" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$lnkMenuLogOut&#39;,&#39;&#39;)" style="cursor: pointer;">
                                <i class="icon-logout"></i> <span>ÇIKIŞ</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <!-- END USER LOGIN DROPDOWN -->
                        <!-- BEGIN USER LOGOUT DROPDOWN -->


                        <!-- END USER LOGOUTDROPDOWN -->
                    </ul>
                </div>
                <!-- END TOP NAVIGATION MENU -->
            </div>
            <!-- END PAGE TOP -->
        </div>
        <!-- END HEADER INNER -->
    </div>
    <!-- END HEADER -->
    <div class="clearfix clearfix-custom">
    </div>
    <!-- BEGIN CONTAINER -->
    <div class="page-container">
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar-wrapper">

            <div class="page-sidebar md-shadow-z-2-i  navbar-collapse collapse">
                <!-- BEGIN SIDEBAR MENU -->
                <ul id="ctl00_ctl00_maincontent_ulMenu" data-keep-expanded="true" data-auto-scroll="true" data-slide-speed="200" class="page-sidebar-menu">

                            <li class="active">
                                <a id="ctl00_ctl00_maincontent_rptMenu_ctl00_hypMenuLink" href="../Common/General.aspx?ID=7" style="padding-top: 5px; padding-bottom: 5px;">
                                  <img src="/static_files/images/menu/default/F_7_hesap_islemleri.png" width="24px" height="24px"  style="border-style:none !important; border-width:0px !important; margin-right:5px;" />
                               <span class="title" >Online Banka</span>
                                </a>
                            </li>

                            <li class="">
                                <a id="ctl00_ctl00_maincontent_rptMenu_ctl01_hypMenuLink" href="FirmList.aspx" style="padding-top: 5px; padding-bottom: 5px;">
                                  <img src="/static_files/images/menu/default/F_12_cari_islemleri.png" width="24px" height="24px"  style="border-style:none !important; border-width:0px !important; margin-right:5px;" />
                               <span class="title" >Cari</span>
                                </a>
                            </li>

                            <li class="">
                                <a id="ctl00_ctl00_maincontent_rptMenu_ctl02_hypMenuLink" href="../Common/UserPasswordChange.aspx" style="padding-top: 5px; padding-bottom: 5px;">
                                  <img src="/static_files/images/menu/default/F_5_ayarlar.png" width="24px" height="24px"  style="border-style:none !important; border-width:0px !important; margin-right:5px;" />
                               <span class="title" >Ayarlar</span>
                                </a>
                            </li>




                </ul>

                <!-- END SIDEBAR MENU -->
            </div>
        </div>
        <!-- END SIDEBAR -->

        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">

            <div class="page-content padding-top-0">
                <div class="row">
                    <!-- BEGIN PAGE HEAD -->
                    <div class="page-head col-md-12">
                        <!-- BEGIN PAGE TITLE -->
                        <div id="notificationPopup"></div>
                        <div class="page-title" style="float: left; margin-right: 10px; padding-bottom: 5px;">
                            <h1 id="ctl00_ctl00_maincontent_hDetail">Hesap Hareketleri</h1>
                        </div>
                        <div class="page-title" style="float: right; margin-right: 10px; padding-bottom: 5px;">



                        </div>
                        <!-- END PAGE TITLE -->

                        <!-- END PAGE HEAD -->
                        <!-- BEGIN PAGE BREADCRUMB -->
                        <div class="breadCrumbDiv">

                                    <ul class="page-breadcrumb breadcrumb">

                                    <li>
                                        <i id="ctl00_ctl00_maincontent_rptBreadCrumb_ctl01_iconBreadCrumb" class="fa fa-play"></i>
                                        <a href='/Firm/Default.aspx'>Ana Sayfa</a>
                                    </li>

                                    <li>
                                        <i id="ctl00_ctl00_maincontent_rptBreadCrumb_ctl02_iconBreadCrumb" class="fa fa-play"></i>
                                        <a href='/Common/General.aspx?ID=7'>Online Banka</a>
                                    </li>

                                    </ul>

                        </div>
                    </div>
                    <!-- END PAGE BREADCRUMB -->
                </div>


                <!-- BEGIN PAGE CONTENT-->
                <div class="row">
                    <div class="col-md-12">
                        <!-- BEGIN ALERTS PORTLET-->
                        <div id="ctl00_ctl00_maincontent_divPortlet" class="portlet light">
                            <div id="ctl00_ctl00_maincontent_tblWarning" style="width:100%;z-index:9990;display:none;" align="right">

                                <span>
                                    <span id="ctl00_ctl00_maincontent_lblExpireDay"></span>
                                    <a href="../SystemAdmin/SystemPayment.aspx">Ödeme Yapınız.</a></span>

                            </div>
                            <div id="divPortletBody" class="portlet-body">




    <input type="hidden" name="ctl00$ctl00$maincontent$content$hdnPageCaption" id="ctl00_ctl00_maincontent_content_hdnPageCaption" value="Hesap Hareketleri" />



    <div id="ctl00_ctl00_maincontent_content_divPaymentList" class="row">

        <div id="ctl00_ctl00_maincontent_content_UpdatePanel1">

                <div class="portlet col-md-12 filter-div-main">

<script>


    //==== NOT ==== Filtreleme div elementi absolute olursa aşağıdaki javascript fonksiyonlarına mobil için ihtiyaç var



    //$(document).ready(function () {
    //    FilterFormHeight();
    //});

    //$(window).resize(function () {
    //    FilterFormHeight();
    //});

    //function FilterFormHeight() {
    //    if ($(window).width() < 991) {
    //        var form = $('.filter-form').first();
    //        var main = $('#divPortletBody').first();
    //        var selected = $('.selected-filter-div').first();
    //        if ($(form) != null && $(main) != null && $(selected) != null) {
    //            $(selected).find('.tools').find('a').click(function () {
    //                setTimeout(function () {
    //                    console.log("form: " + $(form).outerHeight());
    //                    console.log("main: " + $(main).outerHeight());
    //                    console.log("selected: " + $(selected).outerHeight());
    //                    if (($(form).outerHeight() > $(main).outerHeight() - $(selected).outerHeight()) && $(form).css("display") == "block") {
    //                        $(main).css("height", ($(selected).outerHeight() + $(form).outerHeight()) + "px");
    //                    }
    //                    else {
    //                        $(main).css("height", "auto");
    //                    }
    //                }, 500);

    //                //setTimeout(function () {
    //                //    if ($(form).css("display") == "block") {
    //                //        $(main).css("height", ($(selected).outerHeight() + $(form).outerHeight()) + "px");
    //                //    }
    //                //    else {
    //                //        $(main).css("height", $(selected).outerHeight() + "px");
    //                //    }
    //                //}, 500);
    //            });
    //        }
    //        else {
    //            console.log('error');
    //        }
    //    }
    //}
</script>
<style>
    /*==== NOT ==== Filtreleme div elementi absolute olursa aşağıdaki css kodlarına ihtiyaç var*/
    /*

 .filter-form {
        position: absolute;
        width: calc(100% - 30px);
        background: rgb(255, 255, 255);
        z-index:111;
        box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 3px 2px;
        display: block;
        margin-left: 15px;
        padding: 0px;
    }*/
</style>





<div class="portlet-title selected-filter-div">

    <div class="caption" style="padding: 0px; margin-bottom: 5px; margin-left: 15px;">

                <div class="btn-group btn-group-solid tooltips" style="cursor: default; margin: 2px; padding-bottom: 5px" data-original-title='Sıfırlanamaz!' data-container="body" data-placement="auto top">

                    <a class="aspNetDisabled btn small-btn-outline-grid">
                         <span style="color: black;">Tarih - Başlangıç:</span> <b style="color: #ff6600">05.01.2024</b>
                    </a>
                </div>


    </div>
    <div class="tools" style="margin-right: 15px">
        <a href="javascript:;" id="ctl00_ctl00_maincontent_content_UCSearchFilter_btnExpand" class="btn collapse efilter">
            <i class="fa fa-filter"></i>
        </a>
    </div>

</div>

                    <div id="ctl00_ctl00_maincontent_content_divFilterForm" class="portlet-body" style="display:block">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span id="ctl00_ctl00_maincontent_content_ltrFirma">Firma</span>
                                </div>
                                <div class="col-md-8">


<script type="text/javascript">

    $(document).ready(function () {
        PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti();
        UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti();
    });

    function PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti() {
        $('#ctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti').multiselect({
            includeSelectAllOption: true,
            buttonWidth: '100%',
            numberDisplayed: '2',
            dropRight: true,
            enableCaseInsensitiveFiltering: false,
            selectAllText: 'TÜMÜNÜ SEÇ',
            nSelectedText: 'adet seçildi',
            allSelectedText:  'TÜMÜ SEÇİLDİ',
            onChange: function (element, checked) {
             var brands = $('#ctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti option:selected');
                var selected = [];
                $(brands).each(function (index, brand) {
                    selected.push([$(this).val()]);
                });

                document.getElementById('ctl00_ctl00_maincontent_content_ucMultiFirmBranch_hdnSelectedValues').value = $('#ctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti').val();
            },onDropdownHide: function(event) { ShowPleaseWait(); document.getElementById('ctl00_ctl00_maincontent_content_ucMultiFirmBranch_lnkListBoxHide').click();}
     });
    }


    function UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti() {
        if (typeof (Sys) != 'undefined') {
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_endRequest(function () {
                PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti();
		});
    }
}
</script>

<select size="4" name="ctl00$ctl00$maincontent$content$ucMultiFirmBranch$lstMulti" multiple="multiple" id="ctl00_ctl00_maincontent_content_ucMultiFirmBranch_lstMulti" class="ListBox display-none" multiple="multiple">
		<option value="1217">EKMERT T&#220;T&#220;N</option>

	</select>
<a id="ctl00_ctl00_maincontent_content_ucMultiFirmBranch_lnkListBoxHide" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$ucMultiFirmBranch$lnkListBoxHide&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"></a>
<input type="hidden" name="ctl00$ctl00$maincontent$content$ucMultiFirmBranch$hdnSelectedValues" id="ctl00_ctl00_maincontent_content_ucMultiFirmBranch_hdnSelectedValues" />

                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Hareket Tipi</span>
                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$drpPaymentDirectionType" id="ctl00_ctl00_maincontent_content_drpPaymentDirectionType">
		<option selected="selected" value="0">--</option>
		<option value="571">ALACAK</option>
		<option value="572">BOR&#199;</option>

	</select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>İşlem Kodu</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtPaymentID" type="text" id="ctl00_ctl00_maincontent_content_txtPaymentID" />

                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Banka</span>
                                </div>
                                <div class="col-md-8">


<script type="text/javascript">

    $(document).ready(function () {
        PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti();
        UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti();
    });

    function PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti() {
        $('#ctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti').multiselect({
            includeSelectAllOption: true,
            buttonWidth: '100%',
            numberDisplayed: '2',
            dropRight: true,
            enableCaseInsensitiveFiltering: false,
            selectAllText: 'TÜMÜNÜ SEÇ',
            nSelectedText: 'adet seçildi',
            allSelectedText:  'TÜMÜ SEÇİLDİ',
            onChange: function (element, checked) {
             var brands = $('#ctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti option:selected');
                var selected = [];
                $(brands).each(function (index, brand) {
                    selected.push([$(this).val()]);
                });

                document.getElementById('ctl00_ctl00_maincontent_content_ucMultiFirmBank_hdnSelectedValues').value = $('#ctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti').val();
            }
     });
    }


    function UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti() {
        if (typeof (Sys) != 'undefined') {
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_endRequest(function () {
                PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti();
		});
    }
}
</script>

<select size="4" name="ctl00$ctl00$maincontent$content$ucMultiFirmBank$lstMulti" multiple="multiple" id="ctl00_ctl00_maincontent_content_ucMultiFirmBank_lstMulti" class="ListBox display-none" multiple="multiple">
		<option value="26686">AKBANK EKMERT T&#220;T&#220;N TR220004601196888000063716 TRY</option>
		<option value="17167">GARANTİ BBVA EKMERT T&#220;T&#220;N TR050006200114800006295332 TRY</option>
		<option value="17166">HALKBANK EKMERT T&#220;T&#220;N TR920001200139600010100318 TRY</option>
		<option value="17161">İŞ BANKASI EKMERT T&#220;T&#220;N TR210006400000123990009028 TRY</option>
		<option value="17170">QNB FİNANSBANK EKMERT T&#220;T&#220;N TR550011100000000090805680 TRY</option>
		<option value="17165">VAKIFBANK EKMERT T&#220;T&#220;N TR310001500158007305495408 TRY</option>
		<option value="17168">YAPI KREDİ EKMERT T&#220;T&#220;N TR360006701000000094979134 TRY</option>
		<option value="17160">ZİRAAT BANKASI EKMERT T&#220;T&#220;N TR730001002280570296675005 TRY</option>

	</select>

<input type="hidden" name="ctl00$ctl00$maincontent$content$ucMultiFirmBank$hdnSelectedValues" id="ctl00_ctl00_maincontent_content_ucMultiFirmBank_hdnSelectedValues" />


                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Tutar Min</span>
                                </div>
                                <div class="col-md-8">
                                    <div class="col-md-5" style="padding: 0px;">
                                        <input name="ctl00$ctl00$maincontent$content$txtAmount1" type="text" maxlength="11" id="ctl00_ctl00_maincontent_content_txtAmount1" class="form-control textBoxLira" onkeyup="addSeparator(this);" />
                                        <b class="textBoxVirgul">,</b>

                                        <input name="ctl00$ctl00$maincontent$content$txtAmount2" type="text" maxlength="2" id="ctl00_ctl00_maincontent_content_txtAmount2" class="form-control textBoxKurus" />

                                    </div>
                                    <label class="col-md-2">
                                        <span>Max</span>
                                    </label>
                                    <div class="col-md-5" style="padding: 0px;">
                                        <input name="ctl00$ctl00$maincontent$content$txtAmountMax1" type="text" maxlength="11" id="ctl00_ctl00_maincontent_content_txtAmountMax1" class="form-control textBoxLira" onkeyup="addSeparator(this);" /><b class="textBoxVirgul">,</b>

                                        <input name="ctl00$ctl00$maincontent$content$txtAmountMax2" type="text" maxlength="2" id="ctl00_ctl00_maincontent_content_txtAmountMax2" class="form-control textBoxKurus" />

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>İşlem Durumu</span>
                                </div>
                                <div class="col-md-8">


<script type="text/javascript">

    $(document).ready(function () {
        PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti();
        UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti();
    });

    function PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti() {
        $('#ctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti').multiselect({
            includeSelectAllOption: true,
            buttonWidth: '100%',
            numberDisplayed: '2',
            dropRight: true,
            enableCaseInsensitiveFiltering: false,
            selectAllText: 'TÜMÜNÜ SEÇ',
            nSelectedText: 'adet seçildi',
            allSelectedText:  'TÜMÜ SEÇİLDİ',
            onChange: function (element, checked) {
             var brands = $('#ctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti option:selected');
                var selected = [];
                $(brands).each(function (index, brand) {
                    selected.push([$(this).val()]);
                });

                document.getElementById('ctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_hdnSelectedValues').value = $('#ctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti').val();
            }
     });
    }


    function UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti() {
        if (typeof (Sys) != 'undefined') {
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_endRequest(function () {
                PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti();
		});
    }
}
</script>

<select size="4" name="ctl00$ctl00$maincontent$content$ucMultiPaymentStatusType$lstMulti" multiple="multiple" id="ctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_lstMulti" class="ListBox display-none" multiple="multiple">
		<option value="534">EŞLEŞME YAPILAMADI</option>
		<option value="531">EŞLEŞME YAPILDI</option>
		<option value="533">İPTAL EDİLDİ</option>
		<option value="532">TAMAMLANDI</option>

	</select>

<input type="hidden" name="ctl00$ctl00$maincontent$content$ucMultiPaymentStatusType$hdnSelectedValues" id="ctl00_ctl00_maincontent_content_ucMultiPaymentStatusType_hdnSelectedValues" />


                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Cari Adı</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtSenderFirmName" type="text" id="ctl00_ctl00_maincontent_content_txtSenderFirmName" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Cari Tipi</span>
                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$drpSubFirmType" id="ctl00_ctl00_maincontent_content_drpSubFirmType">
		<option selected="selected" value="0">--</option>

	</select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Açıklama</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtExplanation" type="text" id="ctl00_ctl00_maincontent_content_txtExplanation" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Parçalı Kayıtlar</span>
                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$drpSplitAmountYesNo" id="ctl00_ctl00_maincontent_content_drpSplitAmountYesNo">
		<option selected="selected" value="0">--</option>
		<option value="71">EVET</option>
		<option value="72">HAYIR</option>

	</select>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Tarih</span>
                                </div>
                                <div class="col-md-8">

     <div class="input-group col-md-6"  style="float:left;padding-right: 10px; max-width:128px; margin-bottom:5px;">
	<input name="ctl00$ctl00$maincontent$content$ucStartDate$txtCalendarDate" type="text" value="05.01.2024" id="ctl00_ctl00_maincontent_content_ucStartDate_txtCalendarDate" class="form-control" style="width:100%;min-width:82px; max-width:82px; padding: 0 10px;" />
	<span class="input-group-addon"><a id="ctl00_ctl00_maincontent_content_ucStartDate_lnkCalendarDate" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucStartDate$lnkCalendarDate&#39;,&#39;&#39;)"><i class="fa fa-calendar" style="display:block;line-height:10px;"></i></a></span>
     </div>

<input type="hidden" name="ctl00$ctl00$maincontent$content$ucStartDate$meeCalendarDate_ClientState" id="ctl00_ctl00_maincontent_content_ucStartDate_meeCalendarDate_ClientState" />
<span id="ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate" class="requiredField" style="color:Red;display:none;"></span>


     <div class="input-group col-md-6"  style="float:left;padding-right: 10px; max-width:128px; margin-bottom:5px;">
	<input name="ctl00$ctl00$maincontent$content$ucEndDate$txtCalendarDate" type="text" id="ctl00_ctl00_maincontent_content_ucEndDate_txtCalendarDate" class="form-control" style="width:100%;min-width:82px; max-width:82px; padding: 0 10px;" />
	<span class="input-group-addon"><a id="ctl00_ctl00_maincontent_content_ucEndDate_lnkCalendarDate" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucEndDate$lnkCalendarDate&#39;,&#39;&#39;)"><i class="fa fa-calendar" style="display:block;line-height:10px;"></i></a></span>
     </div>

<input type="hidden" name="ctl00$ctl00$maincontent$content$ucEndDate$meeCalendarDate_ClientState" id="ctl00_ctl00_maincontent_content_ucEndDate_meeCalendarDate_ClientState" />
<span id="ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate" class="requiredField" style="color:Red;display:none;"></span>

                                </div>
                            </div>

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Dekont No</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtVoucherNumber" type="text" id="ctl00_ctl00_maincontent_content_txtVoucherNumber" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>TC Kimlik No / Vergi No</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtTcknOrTaxNumber" type="text" maxlength="11" id="ctl00_ctl00_maincontent_content_txtTcknOrTaxNumber" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>İşlem Tipi</span>
                                </div>
                                <div class="col-md-8">


<script type="text/javascript">

    $(document).ready(function () {
        PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti();
        UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti();
    });

    function PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti() {
        $('#ctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti').multiselect({
            includeSelectAllOption: true,
            buttonWidth: '100%',
            numberDisplayed: '2',
            dropRight: true,
            enableCaseInsensitiveFiltering: false,
            selectAllText: 'TÜMÜNÜ SEÇ',
            nSelectedText: 'adet seçildi',
            allSelectedText:  'TÜMÜ SEÇİLDİ',
            onChange: function (element, checked) {
             var brands = $('#ctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti option:selected');
                var selected = [];
                $(brands).each(function (index, brand) {
                    selected.push([$(this).val()]);
                });

                document.getElementById('ctl00_ctl00_maincontent_content_ucMultiPaymentType_hdnSelectedValues').value = $('#ctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti').val();
            }
     });
    }


    function UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti() {
        if (typeof (Sys) != 'undefined') {
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_endRequest(function () {
                PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti();
		});
    }
}
</script>

<select size="4" name="ctl00$ctl00$maincontent$content$ucMultiPaymentType$lstMulti" multiple="multiple" id="ctl00_ctl00_maincontent_content_ucMultiPaymentType_lstMulti" class="ListBox display-none" multiple="multiple">
		<option value="513">BANKA HAREKETİ</option>
		<option value="514">NAKİT</option>
		<option value="515">VİRMAN</option>
		<option value="516">&#199;EK</option>
		<option value="517">POS</option>
		<option value="518">MASRAF</option>
		<option value="519">SENET</option>
		<option value="512">KREDİ</option>

	</select>

<input type="hidden" name="ctl00$ctl00$maincontent$content$ucMultiPaymentType$hdnSelectedValues" id="ctl00_ctl00_maincontent_content_ucMultiPaymentType_hdnSelectedValues" />

                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Para Transfer Kodu</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtPNCode" type="text" id="ctl00_ctl00_maincontent_content_txtPNCode" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Karşı IBAN</span>
                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtSenderIBAN" type="text" id="ctl00_ctl00_maincontent_content_txtSenderIBAN" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Para Birimi</span>
                                </div>
                                <div class=" col-md-8">


<script type="text/javascript">

    $(document).ready(function () {
        PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti();
        UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti();
    });

    function PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti() {
        $('#ctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti').multiselect({
            includeSelectAllOption: true,
            buttonWidth: '100%',
            numberDisplayed: '2',
            dropRight: true,
            enableCaseInsensitiveFiltering: false,
            selectAllText: 'TÜMÜNÜ SEÇ',
            nSelectedText: 'adet seçildi',
            allSelectedText:  'TÜMÜ SEÇİLDİ',
            onChange: function (element, checked) {
             var brands = $('#ctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti option:selected');
                var selected = [];
                $(brands).each(function (index, brand) {
                    selected.push([$(this).val()]);
                });

                document.getElementById('ctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_hdnSelectedValues').value = $('#ctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti').val();
            }
     });
    }


    function UpdateAjaxJQueryctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti() {
        if (typeof (Sys) != 'undefined') {
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_endRequest(function () {
                PrepareMultiDropDownctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti();
		});
    }
}
</script>

<select size="4" name="ctl00$ctl00$maincontent$content$ucMultiSelectFirmCurrency$lstMulti" multiple="multiple" id="ctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_lstMulti" class="ListBox display-none" multiple="multiple">
		<option value="61">T&#220;RK LİRASI</option>

	</select>

<input type="hidden" name="ctl00$ctl00$maincontent$content$ucMultiSelectFirmCurrency$hdnSelectedValues" id="ctl00_ctl00_maincontent_content_ucMultiSelectFirmCurrency_hdnSelectedValues" />

                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>Hesap Kodu</span>
                                </div>
                                <div class=" col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtAccountCode" type="text" id="ctl00_ctl00_maincontent_content_txtAccountCode" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                    <span>ERP Referans No</span>
                                </div>
                                <div class=" col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$txtERPRefNo" type="text" id="ctl00_ctl00_maincontent_content_txtERPRefNo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</div>

        <div id="ctl00_ctl00_maincontent_content_UpdatePanel2">

                <a id="ctl00_ctl00_maincontent_content_lnkPostBack" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$lnkPostBack&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"></a>

</div>

        <div class="col-md-12">
            <input type="submit" name="ctl00$ctl00$maincontent$content$btnSearch" value="Listele" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$btnSearch&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_ctl00_maincontent_content_btnSearch" class="btn btn-default" />
        </div>
        <div class="col-md-12 margin-bottom-5 margin-top-10">
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6 text-right">
                    <div style="float: right">
                        <a id="ctl00_ctl00_maincontent_content_rblExportToExcel_lnkAllPage" class="btn btn-icon-only btn-circle btn-default excelDownloadButton tooltips" data-container="body" data-placement="top" data-original-title="Excel Aktar" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$rblExportToExcel$lnkAllPage&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"><i id="ctl00_ctl00_maincontent_content_rblExportToExcel_iconExcel" class="fa fa-download"></i></a>
<a id="ctl00_ctl00_maincontent_content_rblExportToExcel_lnkDummy" class="btn btn-icon-only btn-circle btn-default excelDownloadButton tooltips" href="javascript:void(0)" data-container="body" data-placement="top" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$rblExportToExcel$lnkDummy&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))" style="display: none"><i id="ctl00_ctl00_maincontent_content_rblExportToExcel_iconExcelDisabled" class="fa fa-download"></i></a>
<script>

    $('#ctl00_ctl00_maincontent_content_rblExportToExcel_lnkAllPage').click(function () {
        $('#ctl00_ctl00_maincontent_content_rblExportToExcel_lnkAllPage').attr("style", "display:none");
        $('#ctl00_ctl00_maincontent_content_rblExportToExcel_lnkDummy').removeAttr("style");

    });


</script>



                    </div>
                    <div style="float: right">




































                    </div>

                </div>
            </div>
        </div>

        <div id="ctl00_ctl00_maincontent_content_divTimerRefresh">
            <span id="ctl00_ctl00_maincontent_content_tmrUpdateList" style="visibility:hidden;display:none;"></span>
        </div>


        <div class="col-md-12 freezeColumn3">
            <div>
	<table class="table table-striped table-bordered table-hover" cellspacing="0" rules="all" border="1" id="ctl00_ctl00_maincontent_content_grdList" style="width:100%;border-collapse:collapse;">
		<tr>
			<th class="paymentStatusHeader" scope="col" style="width:7px;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl01_lnkBulkUpdate" class="tooltips" data-container="body" data-placement="top" data-original-title="Tüm Kayıtlar İçin Toplu İşlem" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl01$lnkBulkUpdate&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
                                <i class="fa Example of check-square-o fa-check-square-o changegreen font-size-14 margin-bottom-5" ></i>
                            </a>
                            <br />

                            <input name="ctl00$ctl00$maincontent$content$grdList$ctl01$chckBoxHeader" type="checkbox" id="ctl00_ctl00_maincontent_content_grdList_ctl01_chckBoxHeader" class="GridHeaderCheckBox" onchange="CheckBoxHeaderChanged();" />
                        </th><th class="ExportExcel" scope="col" style="height:51px;width:7px;">&nbsp;</th><th scope="col" style="width:25px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$PaymentID&#39;)">İşlem Kodu</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$DestBankName&#39;)">Banka</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$Amount&#39;)">Tutar</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$Currency&#39;)">P.B.</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$TimeStamp&#39;)">Tarih</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$PaymentStatusType&#39;)">İşlem Durumu</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$PaymentType&#39;)">İşlem Tipi</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$SubFirmName&#39;)">Cari Adı</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$Explanation&#39;)">A&#231;ıklama</a></th><th scope="col" style="width:140px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$BranchName&#39;)">Firma</a></th><th scope="col" style="width:160px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$VoucherNumber&#39;)">Dekont No</a></th><th scope="col" style="width:110px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$BankTransferType&#39;)">Eşleşme Tipi</a></th><th scope="col" style="width:100px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$TcKimlikNo&#39;)">TC Kimlik No</a></th><th scope="col" style="width:90px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$TaxNumber&#39;)">Vergi No</a></th><th scope="col" style="width:100px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$PNCode&#39;)">Para Transfer Kodu</a></th><th scope="col" style="width:100px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$RuleSetText&#39;)">Kural SET</a></th><th scope="col" style="width:100px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$SourceBankName&#39;)">Karşı Banka</a></th><th scope="col" style="width:155px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$SourceIBAN&#39;)">Karşı IBAN</a></th><th scope="col" style="width:165px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$DestIBAN&#39;)">Firma IBAN</a></th><th scope="col" style="width:95px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$AccountingCode&#39;)">Hesap Kodu</a></th><th scope="col" style="width:95px;"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$ModifyDate&#39;)">G&#252;ncelleme Tarihi</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$SubFirmTypeName&#39;)">Cari Tipi</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$AccountName&#39;)">Hesap Adı</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$CheckNumber&#39;)">&#199;ek Numarası</a></th><th scope="col"><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Sort$ERPRefNo&#39;)">ERP Referans No</a></th>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl02_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl02$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl02_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl02$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525327379</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl02_imgBank" title="İZMİT KOCAELİ GİRİŞİMCİ
TR730001002280570296675005
VADESİZ
TRY" src="/static_files/images/payment/bank/ziraat.svg" alt="ZİRAAT BANKASI" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl02_lblAmount">23.803,38</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 23:14:01</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">ACIL TEKEL BAYII MUHAMMET ORU&#199;</td><td align="left" class="excelcolumntext" style="width:280px;">D6B145178 ACIL TEKEL BAYII  MUHAMMET ORU&#199;   Ziraat Mobil Havale  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">202401081031F023203</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">34738117396</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413200866</td><td align="left" style="width:100px;">D6B145178</td><td align="left" style="width:100px;">ZİRAAT BANKASI</td><td align="left" style="width:155px;">TR330001001031523758365004</td><td align="left" style="width:165px;">TR730001002280570296675005</td><td align="left" class="excelcolumntext" style="width:95px;">D6B145178</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl03_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl03$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl03_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl03$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525319318</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl03_imgBank" title="İZMİT
TR550011100000000090805680
VADESİZ
TRY" src="/static_files/images/payment/bank/finansbank.svg" alt="QNB FİNANSBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl03_lblAmount">500,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:44:25</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">KORKMAZ MARKET CELAL KORKMAZ</td><td align="left" class="excelcolumntext" style="width:280px;">G&#246;nderen:Celal Korkmaz-D6B143087 Celal korkmaz   </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">8080022409038896</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">35854098002</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413194352</td><td align="left" style="width:100px;">D6B143087</td><td align="left" style="width:100px;">QNB FİNANSBANK</td><td align="left" style="width:155px;">TR910011100000000095255101</td><td align="left" style="width:165px;">TR550011100000000090805680</td><td align="left" class="excelcolumntext" style="width:95px;">D6B143087</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl04_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl04$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl04_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl04$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525317976</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl04_imgBank" title="İZMİT KOCAELİ GİRİŞİMCİ
TR730001002280570296675005
VADESİZ
TRY" src="/static_files/images/payment/bank/ziraat.svg" alt="ZİRAAT BANKASI" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl04_lblAmount">6.120,55</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:43:23</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">YENIYOL PETROL AKARYAKIT LTD ŞTI</td><td align="left" class="excelcolumntext" style="width:280px;">d6b137099 yeniyol petrol  YENİYOL PETROL AKARYAKIT LİMİT YENİYOL PETROL AKARYAKIT LİMİTED ŞİRKETİ   Ziraat Mobil Havale  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">202401081547F021543</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">9490408288</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413180504</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">ZİRAAT BANKASI</td><td align="left" style="width:155px;">TR850001001547892333835001</td><td align="left" style="width:165px;">TR730001002280570296675005</td><td align="left" class="excelcolumntext" style="width:95px;">D6B137099</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl05_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl05$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl05_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl05$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525316741</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl05_imgBank" title="İZMİT
TR550011100000000090805680
VADESİZ
TRY" src="/static_files/images/payment/bank/finansbank.svg" alt="QNB FİNANSBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl05_lblAmount">25.000,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:28:45</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">YILMAZ TEKEL BAYİİ TAMER YILMAZ</td><td align="left" class="excelcolumntext" style="width:280px;">G&#246;nderen:Tuğba &#199;ınar-060010691  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">9010022861261739</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">30478095376</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327412893694</td><td align="left" style="width:100px;">060010691</td><td align="left" style="width:100px;">QNB FİNANSBANK</td><td align="left" style="width:155px;">TR720011100000000108077582</td><td align="left" style="width:165px;">TR550011100000000090805680</td><td align="left" class="excelcolumntext" style="width:95px;">060010691</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl06_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl06$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl06_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl06$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525316000</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl06_imgBank" title="İZMİT KOCAELİ GİRİŞİMCİ
TR730001002280570296675005
VADESİZ
TRY" src="/static_files/images/payment/bank/ziraat.svg" alt="ZİRAAT BANKASI" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl06_lblAmount">9.446,48</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:24:15</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">ESENTEPE MARKET / VEHBİ ŞAHİN</td><td align="left" class="excelcolumntext" style="width:280px;">VEHBİ ŞAHİN d6b200440 VEHBİ ŞAHİN   Ziraat Mobil Havale  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">202401082614F099403</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">20594136718</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327832681820</td><td align="left" style="width:100px;">D6B200440</td><td align="left" style="width:100px;">ZİRAAT BANKASI</td><td align="left" style="width:155px;">TR860001002614568168865004</td><td align="left" style="width:165px;">TR730001002280570296675005</td><td align="left" class="excelcolumntext" style="width:95px;">D6B200440</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl07_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl07$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl07_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl07$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525315432</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl07_imgBank" title="İZMİT TİCARİ KOCAELİ
TR210006400000123990009028
VADESİZ
TRY" src="/static_files/images/payment/bank/isbank.svg" alt="İŞ BANKASI" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl07_lblAmount">544,35</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:18:31</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">MUSTAFA AKIN</td><td align="left" class="excelcolumntext" style="width:280px;">D61001744*&#220;MİT AKIN*H2401478160425  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">240106221831462562</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327412961162</td><td align="left" style="width:100px;">D61001744</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:155px;">*****0064***********122280</td><td align="left" style="width:165px;">TR210006400000123990009028</td><td align="left" class="excelcolumntext" style="width:95px;">D61001744</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl08_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl08$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl08_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl08$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525315995</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl08_imgBank" title="KOCAELİ TİCARİ Sİ
TR360006701000000094979134
VADESİZ
TRY" src="/static_files/images/payment/bank/yapikredi.svg" alt="YAPI KREDİ" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl08_lblAmount">2.523,65</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:14:33</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">G&#220;L MARKET / BER&#199;EM KAYA</td><td align="left" class="excelcolumntext" style="width:280px;">GELEN HAVALE -BER&#199;EM KAYA -G&#252;l market ber&#231;em kaya D69179854  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">244765046802</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">21545494970</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327564699012</td><td align="left" style="width:100px;">D6917985</td><td align="left" style="width:100px;">YAPI KREDİ</td><td align="left" style="width:155px;">TR940006701000000079046228</td><td align="left" style="width:165px;">TR360006701000000094979134</td><td align="left" class="excelcolumntext" style="width:95px;">D69179854</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl09_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl09$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl09_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl09$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525315027</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl09_imgBank" title="İZMİT E-5
TR050006200114800006295332
VADESİZ
TRY" src="/static_files/images/payment/bank/garanti.svg" alt="GARANTİ BBVA" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl09_lblAmount">25.200,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 22:13:45</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">G&#220;L MARKET / BER&#199;EM KAYA</td><td align="left" class="excelcolumntext" style="width:280px;">CEP ŞUBE-HVL-G&#220;L MARKET BER&#199;EM KAYA D6917985-BER&#199;EM KAYA  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">2024-01-06-22.13.45.846359</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">21545494970</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327564699012</td><td align="left" style="width:100px;">D6917985</td><td align="left" style="width:100px;">GARANTİ BBVA</td><td align="left" style="width:155px;">TR090006200003700006644001</td><td align="left" style="width:165px;">TR050006200114800006295332</td><td align="left" class="excelcolumntext" style="width:95px;">D69179854</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl10_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl10$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl10_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl10$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525312895</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl10_imgBank" title="İZMİT
TR550011100000000090805680
VADESİZ
TRY" src="/static_files/images/payment/bank/finansbank.svg" alt="QNB FİNANSBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl10_lblAmount">37.466,55</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 21:57:52</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">&#199;INAR B&#220;FE OSMAN &#214;ZBAKIR</td><td align="left" class="excelcolumntext" style="width:280px;">G&#246;nderen:Osman &#214;zbakır-&#199;ınar B&#252;fe Osman &#214;zbakır  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">7630022832103511</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413095352</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">QNB FİNANSBANK</td><td align="left" style="width:155px;">TR870011100000000111951395</td><td align="left" style="width:165px;">TR550011100000000090805680</td><td align="left" class="excelcolumntext" style="width:95px;">D6B074138</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl11_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl11$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl11_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl11$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525309567</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl11_imgBank" title="KOCAELİ TİCARİ Sİ
TR360006701000000094979134
VADESİZ
TRY" src="/static_files/images/payment/bank/yapikredi.svg" alt="YAPI KREDİ" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl11_lblAmount">7.829,43</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 21:32:10</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">SAKA B&#220;FE / MEHMET SELİM SAKA</td><td align="left" class="excelcolumntext" style="width:280px;">GELEN HAVALE -MEHMET SELİM SAKA -D69dr14  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">244767917020</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">30130306130</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327723581356</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">YAPI KREDİ</td><td align="left" style="width:155px;">TR090006701000000076213806</td><td align="left" style="width:165px;">TR360006701000000094979134</td><td align="left" class="excelcolumntext" style="width:95px;">D69191988</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl12_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl12$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl12_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl12$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525314912</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl12_imgBank" title="İZMİR YOLU
TR220004601196888000063716
VADESİZ
TRY" src="/static_files/images/payment/bank/akbank.svg" alt="AKBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl12_lblAmount">8.771,68</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 21:31:13</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">AHMET TEMEL - CANER B&#220;FE</td><td align="left" class="excelcolumntext" style="width:280px;">HAV.AHMET TEMEL-Ahmet temel d61028474  AHMET TEMEL</td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">0188804780000000001261201-607291</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">24715461932</td><td align="left" class="excelcolumntext" style="width:80px;">8370034538</td><td align="left" class="excelcolumntext" style="width:100px;">PN327412975910</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">AKBANK</td><td align="left" style="width:155px;">TR810004600478888000012612</td><td align="left" style="width:165px;">TR220004601196888000063716</td><td align="left" class="excelcolumntext" style="width:95px;">D61028474</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl13_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl13$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl13_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl13$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525306658</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl13_imgBank" title="İZMİT E-5
TR050006200114800006295332
VADESİZ
TRY" src="/static_files/images/payment/bank/garanti.svg" alt="GARANTİ BBVA" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl13_lblAmount">12.429,33</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 21:07:09</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">SALİM MARKET SALİM DAĞ</td><td align="left" class="excelcolumntext" style="width:280px;">CEP ŞUBE-HVL-D6B170914    SALİM MARKET      -SALİM DAĞ  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">2024-01-06-21.07.09.877139</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">14978016062</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327507443274</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">GARANTİ BBVA</td><td align="left" style="width:155px;">TR710006200159000006694969</td><td align="left" style="width:165px;">TR050006200114800006295332</td><td align="left" class="excelcolumntext" style="width:95px;">D6B170914</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl14_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl14$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl14_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl14$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525308543</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl14_imgBank" title="1396 İZMİT TİCARİ Sİ/KOCAELİ
TR920001200139600010100318
VADESİZ
TRY" src="/static_files/images/payment/bank/halkbank.svg" alt="HALKBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl14_lblAmount">3.820,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 20:55:33</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">ULUDAĞ MARKET RECEP YURTSEVER</td><td align="left" class="excelcolumntext" style="width:280px;">uludağ market D6B181955 Karşı &#220;nvan: RECEP YURTSEVER  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">2024-01-06-20.55.33.380317</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">25253345098</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327586998580</td><td align="left" style="width:100px;">D6B181955</td><td align="left" style="width:100px;">HALKBANK</td><td align="left" style="width:155px;">TR490001200143600010100504</td><td align="left" style="width:165px;">TR920001200139600010100318</td><td align="left" class="excelcolumntext" style="width:95px;">D6B181955</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl15_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl15$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl15_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl15$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525302277</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl15_imgBank" title="İZMİT
TR550011100000000090805680
VADESİZ
TRY" src="/static_files/images/payment/bank/finansbank.svg" alt="QNB FİNANSBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl15_lblAmount">10.580,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 20:51:37</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">ERKAR GIDA TEKEL BAYİ KERİME ER</td><td align="left" class="excelcolumntext" style="width:280px;">G&#246;nderen:Kerime Er-erkar kerime er  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">9250022714183855</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">3360425155</td><td align="left" class="excelcolumntext" style="width:100px;">PN327412850888</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">QNB FİNANSBANK</td><td align="left" style="width:155px;">TR050011100000000056006569</td><td align="left" style="width:165px;">TR550011100000000090805680</td><td align="left" class="excelcolumntext" style="width:95px;">060000388</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl16_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl16$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl16_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl16$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525299645</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl16_imgBank" title="İZMİT E-5
TR050006200114800006295332
VADESİZ
TRY" src="/static_files/images/payment/bank/garanti.svg" alt="GARANTİ BBVA" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl16_lblAmount">9.659,83</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 20:29:04</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">M&#220;SL&#220;M BABA TEKEL SHOP ERTUĞRUL KARASU</td><td align="left" class="excelcolumntext" style="width:280px;">CEP ŞUBE-HVL-                               -BARIŞ KARASU  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">2024-01-06-20.29.04.130021</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">29758199088</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327430261682</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">GARANTİ BBVA</td><td align="left" style="width:155px;">TR910006200105000006652204</td><td align="left" style="width:165px;">TR050006200114800006295332</td><td align="left" class="excelcolumntext" style="width:95px;">D6A002469</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl17_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl17$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl17_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl17$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525296803</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl17_imgBank" title="İZMİR YOLU
TR220004601196888000063716
VADESİZ
TRY" src="/static_files/images/payment/bank/akbank.svg" alt="AKBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl17_lblAmount">10.000,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 19:53:53</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">AYHAN ARSLAN GIDA SN.VE TİC.LTD.ŞTİ.</td><td align="left" class="excelcolumntext" style="width:280px;">HAV.YASİN G&#220;RSUCU-D6B146564  YASİN G&#220;RSUCU</td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">0188805620000000010358001-569906</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">37348066658</td><td align="left" class="excelcolumntext" style="width:80px;">4490220386</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413203612</td><td align="left" style="width:100px;">D6B146564</td><td align="left" style="width:100px;">AKBANK</td><td align="left" style="width:155px;">TR750004600562888000103580</td><td align="left" style="width:165px;">TR220004601196888000063716</td><td align="left" class="excelcolumntext" style="width:95px;">D6B146564</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl18_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl18$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl18_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl18$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525295540</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl18_imgBank" title="1396 İZMİT TİCARİ Sİ/KOCAELİ
TR920001200139600010100318
VADESİZ
TRY" src="/static_files/images/payment/bank/halkbank.svg" alt="HALKBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl18_lblAmount">3.300,00</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 19:49:38</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">AYHAN ARSLAN GIDA SN.VE TİC.LTD.ŞTİ.</td><td align="left" class="excelcolumntext" style="width:280px;">TR56 0001 2009 2840 0010 2610 55 DAN TR92 0001 2001 3960 0010 1003 18 A HAVALE Karşı &#220;nvan: AYHAN ARSLAN GIDA SANAYİ VE TİCARET LİMİTED ŞİRKET  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">2024-01-06-19.49.38.274139</td><td align="left" style="width:110px;">IBAN NO</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">1210905044</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413203612</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">HALKBANK</td><td align="left" style="width:155px;">TR560001200928400010261055</td><td align="left" style="width:165px;">TR920001200139600010100318</td><td align="left" class="excelcolumntext" style="width:95px;">D6B146564</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl19_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl19$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl19_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl19$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525291182</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl19_imgBank" title="İZMİT TİCARİ KOCAELİ
TR210006400000123990009028
VADESİZ
TRY" src="/static_files/images/payment/bank/isbank.svg" alt="İŞ BANKASI" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl19_lblAmount">14.885,47</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 19:45:40</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">KARDEŞLER MARKET , SALİH AKY&#220;Z</td><td align="left" class="excelcolumntext" style="width:280px;">0600029 50*SALİH AKY&#220;Z*H2401477850481  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">240106194540248520</td><td align="left" style="width:110px;">VERGİ NO</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">0460028494</td><td align="left" class="excelcolumntext" style="width:100px;">PN327412856750</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" style="width:155px;">*****0064***********247416</td><td align="left" style="width:165px;">TR210006400000123990009028</td><td align="left" class="excelcolumntext" style="width:95px;">060002950</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl20_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl20$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl20_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl20$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525290662</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl20_imgBank" title="İZMİT
TR550011100000000090805680
VADESİZ
TRY" src="/static_files/images/payment/bank/finansbank.svg" alt="QNB FİNANSBANK" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl20_lblAmount">3.895,62</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 19:36:22</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">DESTAN MARKET ENGİN &#214;ZLEK</td><td align="left" class="excelcolumntext" style="width:280px;">G&#246;nderen:Engin &#214;zlek-D6B171875  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">4370022475788502</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:80px;">7010128438</td><td align="left" class="excelcolumntext" style="width:100px;">PN327512245416</td><td align="left" style="width:100px;">D6B171875</td><td align="left" style="width:100px;">QNB FİNANSBANK</td><td align="left" style="width:155px;">TR170011100000000106066889</td><td align="left" style="width:165px;">TR550011100000000090805680</td><td align="left" class="excelcolumntext" style="width:95px;">D6B171875</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td align="center" class="paymentStatusEslesmeYapildi" style="width:13px;">

                            <span class="GridRowCheckBox" OnChange="CheckBoxSpanOnChange(this)"><input id="ctl00_ctl00_maincontent_content_grdList_ctl21_chckBox" type="checkbox" name="ctl00$ctl00$maincontent$content$grdList$ctl21$chckBox" /></span>
                        </td><td align="center" style="width:10px;">
                            <i class="fa fa-arrow-up changegreen" alt="ALACAK"></i>


                        </td><td align="right" style="width:4%;white-space:nowrap;">
                            <a id="ctl00_ctl00_maincontent_content_grdList_ctl21_lnkPaymentID" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$grdList$ctl21$lnkPaymentID&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">525286672</a>
                        </td><td align="center" style="width:70px;">
                            <img id="ctl00_ctl00_maincontent_content_grdList_ctl21_imgBank" title="İZMİT KOCAELİ GİRİŞİMCİ
TR730001002280570296675005
VADESİZ
TRY" src="/static_files/images/payment/bank/ziraat.svg" alt="ZİRAAT BANKASI" />
                        </td><td align="right" style="width:77px;white-space:nowrap;">
                            <span id="ctl00_ctl00_maincontent_content_grdList_ctl21_lblAmount">7.668,65</span>
                        </td><td align="center">TRY</td><td align="center" style="width:60px;">06.01.2024 19:14:02</td><td align="left" style="width:68px;">EŞLEŞME YAPILDI</td><td align="left" style="width:60px;">BANKA HAREKETİ</td><td align="left" style="width:150px;">FATİH TEKEL BAYİ DAVUT AYDIN</td><td align="left" class="excelcolumntext" style="width:280px;">G&#246;nd: DAVUT AYDIN Bayi kodu D6B053916 fatih ticaret davut aydın ch&#246; 0205-Kuveyt T&#252;rk Katılım Bankası A.Ş. FAST işlemi  </td><td align="left" style="width:140px;">EKMERT T&#220;T&#220;N</td><td align="left" class="excelcolumntext" style="width:160px;">202401082280F001504</td><td align="left" style="width:110px;">KURAL SET</td><td align="left" style="width:100px;">11404560618</td><td align="left" class="excelcolumntext" style="width:80px;">&nbsp;</td><td align="left" class="excelcolumntext" style="width:100px;">PN327413078858</td><td align="left" style="width:100px;">D6B053916</td><td align="left" style="width:100px;">KUVEYTT&#220;RK</td><td align="left" style="width:155px;">TR750020500000853485700001</td><td align="left" style="width:165px;">TR730001002280570296675005</td><td align="left" class="excelcolumntext" style="width:95px;">D6B053916</td><td align="center" style="width:95px;">&nbsp;</td><td align="left" style="width:150px;">&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td><td>&nbsp;</td><td align="left" style="width:90px;">&nbsp;</td>
		</tr><tr>
			<td colspan="27"><table style="border-width:0px;width:100%;">
				<tr>
					<td align="left" style="width:1px;"><span>Sayfa: </span></td><td align="left"><table>
						<tr>
							<td><span>1</span></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$2&#39;)">2</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$3&#39;)">3</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$4&#39;)">4</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$5&#39;)">5</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$6&#39;)">6</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$7&#39;)">7</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$8&#39;)">8</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$9&#39;)">9</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$10&#39;)">10</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$11&#39;)">...</a></td><td><a href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$grdList&#39;,&#39;Page$Last&#39;)">»</a></td>
						</tr>
					</table></td><td align="right"><span>Toplam Tutar: 17.400.633,27 / Kayıt: 1 - 20 / 1171</span></td>
				</tr>
			</table></td>
		</tr>
	</table>
</div>



        </div>



        <div class="col-md-12">
            <input type="submit" name="ctl00$ctl00$maincontent$content$btnShowPopupFirm" value="Toplu İşlem" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$btnShowPopupFirm&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_ctl00_maincontent_content_btnShowPopupFirm" class="btn btn-success" />
            <input type="submit" name="ctl00$ctl00$maincontent$content$btnCrossVirman" value="Çapraz Virman" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$btnCrossVirman&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_ctl00_maincontent_content_btnCrossVirman" class="btn btn-info" />
            <input type="submit" name="ctl00$ctl00$maincontent$content$btnBulkShowPopupFirm" value="Toplu Dekont" onclick="FillDekontForm();return false;" id="ctl00_ctl00_maincontent_content_btnBulkShowPopupFirm" class="btn btn-primary" />
            <input type="submit" name="ctl00$ctl00$maincontent$content$ucMailLookup$btnBulkShowMailPopupFirm" value="TOPLU MAIL" id="ctl00_ctl00_maincontent_content_ucMailLookup_btnBulkShowMailPopupFirm" class="btn btn-success" />



<a id="ctl00_ctl00_maincontent_content_ucMailLookup_lnkShowPopupMail" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$ucMailLookup$lnkShowPopupMail&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"></a>

<div id="ctl00_ctl00_maincontent_content_ucMailLookup_pnlPopupMail" class="modal-dialog" style="display: none; z-index: 1;">

    <div id="ctl00_ctl00_maincontent_content_ucMailLookup_Div1" class="modal-content widthMailPopup">
        <div class="modal-header">
            <a id="ctl00_ctl00_maincontent_content_ucMailLookup_lnkFirmMail" class="close" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucMailLookup$lnkFirmMail&#39;,&#39;&#39;)"></a>
            <h4 class="modal-title">
                <span id="ctl00_ctl00_maincontent_content_ucMailLookup_Label1" class="msg">Mail Gönderme Seçenekleri</span>
            </h4>
        </div>
        <div class="modal-body">
            <div id="ctl00_ctl00_maincontent_content_ucMailLookup_Panel2">

                <div id="ctl00_ctl00_maincontent_content_ucMailLookup_upOptions">

                        <div class="row ">
                            <div class="col-md-3 rdnLabel">
                                <input id="ctl00_ctl00_maincontent_content_ucMailLookup_rdnMySelf" type="radio" name="ctl00$ctl00$maincontent$content$ucMailLookup$mailSend" value="rdnMySelf" checked="checked" /><label for="ctl00_ctl00_maincontent_content_ucMailLookup_rdnMySelf">Kendime Mail Gönder</label>
                            </div>
                            <div class="col-md-9">
                                <input name="ctl00$ctl00$maincontent$content$ucMailLookup$txtMySelf" type="text" readonly="readonly" id="ctl00_ctl00_maincontent_content_ucMailLookup_txtMySelf" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 rdnLabel">
                                <input id="ctl00_ctl00_maincontent_content_ucMailLookup_rdnFirm" type="radio" name="ctl00$ctl00$maincontent$content$ucMailLookup$mailSend" value="rdnFirm" onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$ucMailLookup$rdnFirm\&#39;,\&#39;\&#39;)&#39;, 0)" /><label for="ctl00_ctl00_maincontent_content_ucMailLookup_rdnFirm">Firmaya Mail Gönder</label>
                            </div>
                            <div class="col-md-9">
                                <input name="ctl00$ctl00$maincontent$content$ucMailLookup$txtFirm" type="text" readonly="readonly" id="ctl00_ctl00_maincontent_content_ucMailLookup_txtFirm" disabled="disabled" class="aspNetDisabled" />
                            </div>
                        </div>
                        <div id="ctl00_ctl00_maincontent_content_ucMailLookup_divCurrent" class="row">
                            <div class="col-md-3 rdnLabel">
                                <input id="ctl00_ctl00_maincontent_content_ucMailLookup_rdnCurrent" type="radio" name="ctl00$ctl00$maincontent$content$ucMailLookup$mailSend" value="rdnCurrent" onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$ucMailLookup$rdnCurrent\&#39;,\&#39;\&#39;)&#39;, 0)" /><label for="ctl00_ctl00_maincontent_content_ucMailLookup_rdnCurrent">Cariye Mail Gönder</label>
                            </div>
                            <div class="col-md-9">
                                <input name="ctl00$ctl00$maincontent$content$ucMailLookup$txtCurrent" type="text" readonly="readonly" id="ctl00_ctl00_maincontent_content_ucMailLookup_txtCurrent" disabled="disabled" class="aspNetDisabled" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 rdnLabel">
                                <input id="ctl00_ctl00_maincontent_content_ucMailLookup_rdnElse" type="radio" name="ctl00$ctl00$maincontent$content$ucMailLookup$mailSend" value="rdnElse" onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$ucMailLookup$rdnElse\&#39;,\&#39;\&#39;)&#39;, 0)" /><label for="ctl00_ctl00_maincontent_content_ucMailLookup_rdnElse">Diğer</label>
                            </div>
                            <div class="col-md-9">

                                <input name="ctl00$ctl00$maincontent$content$ucMailLookup$txtElse" type="text" id="ctl00_ctl00_maincontent_content_ucMailLookup_txtElse" disabled="disabled" class="aspNetDisabled" placeholder="Mail adreslerini &#39;;&#39; ile birleştiriniz." />

                            </div>
                        </div>

		</div>
                <div class="row">
                    <div id="ctl00_ctl00_maincontent_content_ucMailLookup_Div2" class="col-md-12">

                        <input type="submit" name="ctl00$ctl00$maincontent$content$ucMailLookup$btnSendMailAccept" value="Gönder" id="ctl00_ctl00_maincontent_content_ucMailLookup_btnSendMailAccept" class="btn btn-success" style="float: right" />
                    </div>
                </div>

	</div>
        </div>
    </div>

</div>



            <input type="submit" name="ctl00$ctl00$maincontent$content$btnAddManuelFirmBank" value="Manuel Vadeli Ekle" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$btnAddManuelFirmBank&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_ctl00_maincontent_content_btnAddManuelFirmBank" class="btn btn-info" />
        </div>
        <a id="ctl00_ctl00_maincontent_content_lnkShowPopupFirm" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$lnkShowPopupFirm&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"></a>

        <div id="ctl00_ctl00_maincontent_content_pnlPopupFirm" class="modal-dialog" style="display: none; z-index: 1;">

            <div id="ctl00_ctl00_maincontent_content_modalcontainerID" class="modal-content">
                <div class="modal-header">
                    <a id="ctl00_ctl00_maincontent_content_lnkFirm" class="close" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$lnkFirm&#39;,&#39;&#39;)"></a>
                    <h4 class="modal-title">
                        <span id="ctl00_ctl00_maincontent_content_lblPopupHeaderFirm" class="msg">Toplu İşlem</span>
                    </h4>
                </div>
                <div class="modal-body">
                    <div id="ctl00_ctl00_maincontent_content_Panel1">


                            <div id="ctl00_ctl00_maincontent_content_upBulkSelectedPayment">

                                    <div id="ctl00_ctl00_maincontent_content_divBulkPaymentStatus" class="col-md-6" style="border-right: .5px solid #000000">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <input id="ctl00_ctl00_maincontent_content_rbBulkPaymentStatus" type="radio" name="ctl00$ctl00$maincontent$content$rbBulk" value="rbBulkPaymentStatus" checked="checked" />
                                            </div>
                                            <div class="col-md-8">
                                                İşlem Durumu
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="FieldHeaderRequired col-md-4">
                                                İşlem Durumu
                                            </div>
                                            <div class="col-md-8">
                                                <select name="ctl00$ctl00$maincontent$content$drpSelectedPaymentStatusType" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$drpSelectedPaymentStatusType\&#39;,\&#39;\&#39;)&#39;, 0)" id="ctl00_ctl00_maincontent_content_drpSelectedPaymentStatusType">

			</select>
                                                <span id="ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect" class="requiredField" style="color:Red;display:none;">İşlem durumu seçiniz</span>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="FieldHeaderRequired col-md-4">
                                                Seçilen Adet
                                            </div>
                                            <div class="col-md-8">
                                                <span id="ctl00_ctl00_maincontent_content_lblCount"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ctl00_ctl00_maincontent_content_divBulkPaymentType" class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input id="ctl00_ctl00_maincontent_content_rbBulkPaymentType" type="radio" name="ctl00$ctl00$maincontent$content$rbBulk" value="rbBulkPaymentType" onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$rbBulkPaymentType\&#39;,\&#39;\&#39;)&#39;, 0)" />
                                        </div>
                                        <div class="col-md-8">
                                            İşlem Tipi
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="FieldHeaderRequired col-md-4">
                                            İşlem Tipi
                                        </div>
                                        <div class="col-md-8">
                                            <select name="ctl00$ctl00$maincontent$content$drpBulkPaymentType" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$drpBulkPaymentType\&#39;,\&#39;\&#39;)&#39;, 0)" id="ctl00_ctl00_maincontent_content_drpBulkPaymentType">

			</select>
                                            <span id="ctl00_ctl00_maincontent_content_rfBulkPaymentType" class="requiredField" style="color:Red;display:none;">İşlem Tipi Seçiniz</span>
                                        </div>
                                    </div>

                                     <div class="row">
                                            <div class="FieldHeaderRequired col-md-4">
                                                Seçilen Adet
                                            </div>
                                            <div class="col-md-8">
                                                <span id="ctl00_ctl00_maincontent_content_lblPaymentTypeCount"></span>
                                            </div>
                                        </div>

                                </div>

		</div>

                        <div class="col-md-12">
                            <div class="row">
                                <div id="ctl00_ctl00_maincontent_content_trFirm" class="FieldHeader col-md-2">
                                    Cari Adı
                                </div>
                                <div class="col-md-10">


<style type="text/css">
    .LabelStyle {
        border: none;
        background-color: White;
        display: none !important;
    }


    @media screen and (min-width: 850px) and (max-width:1099px) {
        .modal-dialog-firm {
            min-width: 800px;
        }
    }
        @media screen and (min-width: 1100px) {
        .modal-dialog-firm {
            min-width: 1000px;
        }
    }

        @media screen and (min-width: 1300px) {
        .modal-dialog-firm {
            min-width: 1200px;
        }
    }

.selected-filter-div{
    padding:0 !important;

}
</style>
<script>
    $(document).ready(function () {
        var dragabble = 'False';
        if (dragabble.toLocaleLowerCase() == 'true') {
            $('#ctl00_ctl00_maincontent_content_ucFirmLookup_pnlDealers').draggable({

                containment: "window", cursor: "crosshair", opacity: 0.5, delay: 100
            });
        }
    });


</script>
<span id="ctl00_ctl00_maincontent_content_ucFirmLookup_upSelectedDealer">
        <div style="float: left;">
            <div style="float: left;">
                <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtDealer" type="text" readonly="readonly" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtDealer" class="LabelStyle" style="width:1px;" />
                <a id="ctl00_ctl00_maincontent_content_ucFirmLookup_lBdealer" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookup$lBdealer&#39;,&#39;&#39;)" style="display: inline;"></a>

                &nbsp;
            </div>
            <div style="float: right; margin-top: 5px;">

            </div>
            <div id="ctl00_ctl00_maincontent_content_ucFirmLookup_divFirmPopupButtons" style="white-space: nowrap">
                <a id="ctl00_ctl00_maincontent_content_ucFirmLookup_lnkShowPopup" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookup$lnkShowPopup&#39;,&#39;&#39;)">
                <i class="fa fa-clone fa-flip-horizontal window-open-icon"></i>
                </a>

            </div>

        </div>
    </span>
<input type="button" name="ctl00$ctl00$maincontent$content$ucFirmLookup$dummyButton" value="" onclick="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookup$dummyButton&#39;,&#39;&#39;)" id="ctl00_ctl00_maincontent_content_ucFirmLookup_dummyButton" style="display: none" />

<div id="ctl00_ctl00_maincontent_content_ucFirmLookup_pnlDealers" class="modal-dialog modal-dialog-firm" onkeypress="javascript:return WebForm_FireDefaultButton(event, &#39;ctl00_ctl00_maincontent_content_ucFirmLookup_btnSearch&#39;)" style="display: none; z-index: 1;">

    <div class="modal-content">
        <div class="modal-header">
            <a id="ctl00_ctl00_maincontent_content_ucFirmLookup_lnkClose" class="close" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookup$lnkClose&#39;,&#39;&#39;)"></a>
            <h4 class="modal-title">
                <span id="ctl00_ctl00_maincontent_content_ucFirmLookup_Label1" class="msg">Cari Seçimi</span>
            </h4>
        </div>
        <div id="ctl00_ctl00_maincontent_content_ucFirmLookup_upDealers">

                <div class="modal-body">
                    <div class="portlet col-md-12 filter-div-main">

<script>


    //==== NOT ==== Filtreleme div elementi absolute olursa aşağıdaki javascript fonksiyonlarına mobil için ihtiyaç var



    //$(document).ready(function () {
    //    FilterFormHeight();
    //});

    //$(window).resize(function () {
    //    FilterFormHeight();
    //});

    //function FilterFormHeight() {
    //    if ($(window).width() < 991) {
    //        var form = $('.filter-form').first();
    //        var main = $('#divPortletBody').first();
    //        var selected = $('.selected-filter-div').first();
    //        if ($(form) != null && $(main) != null && $(selected) != null) {
    //            $(selected).find('.tools').find('a').click(function () {
    //                setTimeout(function () {
    //                    console.log("form: " + $(form).outerHeight());
    //                    console.log("main: " + $(main).outerHeight());
    //                    console.log("selected: " + $(selected).outerHeight());
    //                    if (($(form).outerHeight() > $(main).outerHeight() - $(selected).outerHeight()) && $(form).css("display") == "block") {
    //                        $(main).css("height", ($(selected).outerHeight() + $(form).outerHeight()) + "px");
    //                    }
    //                    else {
    //                        $(main).css("height", "auto");
    //                    }
    //                }, 500);

    //                //setTimeout(function () {
    //                //    if ($(form).css("display") == "block") {
    //                //        $(main).css("height", ($(selected).outerHeight() + $(form).outerHeight()) + "px");
    //                //    }
    //                //    else {
    //                //        $(main).css("height", $(selected).outerHeight() + "px");
    //                //    }
    //                //}, 500);
    //            });
    //        }
    //        else {
    //            console.log('error');
    //        }
    //    }
    //}
</script>
<style>
    /*==== NOT ==== Filtreleme div elementi absolute olursa aşağıdaki css kodlarına ihtiyaç var*/
    /*

 .filter-form {
        position: absolute;
        width: calc(100% - 30px);
        background: rgb(255, 255, 255);
        z-index:111;
        box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 3px 2px;
        display: block;
        margin-left: 15px;
        padding: 0px;
    }*/
</style>





<div class="portlet-title selected-filter-div">

    <div class="caption" style="padding: 0px; margin-bottom: 5px; margin-left: 15px;">

                <div class="btn-group btn-group-solid tooltips" style="cursor: default; margin: 2px; padding-bottom: 5px" data-original-title='Sıfırlanamaz!' data-container="body" data-placement="auto top">

                    <a class="aspNetDisabled btn small-btn-outline-grid">
                         <span style="color: black;">Durum:</span> <b style="color: #ff6600">AKTİF</b>
                    </a>
                </div>


    </div>
    <div class="tools" style="margin-right: 15px">
        <a href="javascript:;" id="ctl00_ctl00_maincontent_content_ucFirmLookup_UCSearchFilter_btnExpand" class="btn collapse efilter">
            <i class="fa fa-filter"></i>
        </a>
    </div>

</div>

                        <div id="ctl00_ctl00_maincontent_content_ucFirmLookup_divFilterForm" class="portlet-body" style="display:block">

                    <div class="row margin-bottom-10">
                        <div class="col-md-6">

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Para Transfer Kodu</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtPaymentExpCode" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtPaymentExpCode" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Cari Adı</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtFirmName" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtFirmName" tabindex="2" />
                                </div>

                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Cari Tipi</span>

                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$ucFirmLookup$drpSubFirmType" id="ctl00_ctl00_maincontent_content_ucFirmLookup_drpSubFirmType">
					<option selected="selected" value="0">--</option>

				</select>
                                </div>
                            </div>
                             <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>İl</span>

                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$ucFirmLookup$drpCity" id="ctl00_ctl00_maincontent_content_ucFirmLookup_drpCity">
					<option selected="selected" value="0">--</option>
					<option value="1">ADANA</option>
					<option value="2">ADIYAMAN</option>
					<option value="3">AFYON</option>
					<option value="4">AĞRI</option>
					<option value="68">AKSARAY</option>
					<option value="5">AMASYA</option>
					<option value="6">ANKARA</option>
					<option value="7">ANTALYA</option>
					<option value="75">ARDAHAN</option>
					<option value="8">ARTVİN</option>
					<option value="9">AYDIN</option>
					<option value="10">BALIKESİR</option>
					<option value="74">BARTIN</option>
					<option value="72">BATMAN</option>
					<option value="69">BAYBURT</option>
					<option value="11">BİLECİK</option>
					<option value="12">BİNG&#214;L</option>
					<option value="13">BİTLİS</option>
					<option value="14">BOLU</option>
					<option value="15">BURDUR</option>
					<option value="16">BURSA</option>
					<option value="17">&#199;ANAKKALE</option>
					<option value="18">&#199;ANKIRI</option>
					<option value="19">&#199;ORUM</option>
					<option value="20">DENİZLİ</option>
					<option value="21">DİYARBAKIR</option>
					<option value="81">D&#220;ZCE</option>
					<option value="22">EDİRNE</option>
					<option value="23">ELAZIĞ</option>
					<option value="24">ERZİNCAN</option>
					<option value="25">ERZURUM</option>
					<option value="26">ESKİŞEHİR</option>
					<option value="27">GAZİANTEP</option>
					<option value="28">GİRESUN</option>
					<option value="29">G&#220;M&#220;ŞHANE</option>
					<option value="30">HAKKARİ</option>
					<option value="31">HATAY</option>
					<option value="76">IĞDIR</option>
					<option value="32">ISPARTA</option>
					<option value="33">İ&#199;EL</option>
					<option value="34">İSTANBUL</option>
					<option value="35">İZMİR</option>
					<option value="46">KAHRAMANMARAŞ</option>
					<option value="78">KARAB&#220;K</option>
					<option value="70">KARAMAN</option>
					<option value="36">KARS</option>
					<option value="37">KASTAMONU</option>
					<option value="38">KAYSERİ</option>
					<option value="71">KIRIKKALE</option>
					<option value="39">KIRKLARELİ</option>
					<option value="40">KIRŞEHİR</option>
					<option value="79">KİLİS</option>
					<option value="41">KOCAELİ</option>
					<option value="42">KONYA</option>
					<option value="43">K&#220;TAHYA</option>
					<option value="44">MALATYA</option>
					<option value="45">MANİSA</option>
					<option value="47">MARDİN</option>
					<option value="48">MUĞLA</option>
					<option value="49">MUŞ</option>
					<option value="50">NEVŞEHİR</option>
					<option value="51">NİĞDE</option>
					<option value="52">ORDU</option>
					<option value="80">OSMANİYE</option>
					<option value="53">RİZE</option>
					<option value="54">SAKARYA</option>
					<option value="55">SAMSUN</option>
					<option value="56">SİİRT</option>
					<option value="57">SİNOP</option>
					<option value="58">SİVAS</option>
					<option value="63">ŞANLIURFA</option>
					<option value="73">ŞIRNAK</option>
					<option value="59">TEKİRDAĞ</option>
					<option value="60">TOKAT</option>
					<option value="61">TRABZON</option>
					<option value="62">TUNCELİ</option>
					<option value="64">UŞAK</option>
					<option value="65">VAN</option>
					<option value="77">YALOVA</option>
					<option value="66">YOZGAT</option>
					<option value="67">ZONGULDAK</option>
					<option value="999">DİĞER</option>

				</select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>İlçe</span>

                                </div>
                                <div class="col-md-8">
                                     <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtCounty" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtCounty" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Yetkili Ad Soyad</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtAuthPersName" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtAuthPersName" tabindex="1" />
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6">

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Vergi Numarası</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtVkn" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtVkn" tabindex="1" />
                                </div>
                            </div>
                              <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>İş Alanı</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtBussinesNo" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtBussinesNo" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Hesap Kodu</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtAccountingCode" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtAccountingCode" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Özel Alan</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookup$txtReservedField" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookup_txtReservedField" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">

                                <div class="FieldHeader col-md-4">
                                                   <span>Durum</span>

                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$ucFirmLookup$drpStatus" id="ctl00_ctl00_maincontent_content_ucFirmLookup_drpStatus" disabled="disabled" class="aspNetDisabled">
					<option value="0">--</option>
					<option selected="selected" value="11">AKTİF</option>
					<option value="12">PASİF</option>

				</select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" name="ctl00$ctl00$maincontent$content$ucFirmLookup$btnSearch" value="Listele" id="ctl00_ctl00_maincontent_content_ucFirmLookup_btnSearch" class="btn btn-default" />
                        </div>
                    </div>
                        </div>
                    </div>

                    <div>
					<table class="table table-striped table-bordered" cellspacing="0" rules="all" border="1" id="ctl00_ctl00_maincontent_content_ucFirmLookup_gridList" style="width:100%;border-collapse:collapse;">
						<tr>
							<td colspan="11">Kayıt bulunamadı!</td>
						</tr>
					</table>
				</div>




                </div>

			</div>
    </div>

		</div>

                                </div>
                            </div>

                        </div>

	</div>
                </div>
                <div class="modal-footer">
                    <div id="ctl00_ctl00_maincontent_content_Td10">
                        <input type="submit" name="ctl00$ctl00$maincontent$content$btnUpdateSelectedPayment" value="Kaydet" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$btnUpdateSelectedPayment&quot;, &quot;&quot;, true, &quot;vgPayment&quot;, &quot;&quot;, false, false))" id="ctl00_ctl00_maincontent_content_btnUpdateSelectedPayment" class="btn btn-success" />
                    </div>
                </div>
            </div>

</div>


        <a id="ctl00_ctl00_maincontent_content_lnkShowPopupBulkUpdate" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$maincontent$content$lnkShowPopupBulkUpdate&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"></a>

        <div id="ctl00_ctl00_maincontent_content_pnlPopupBulkUpdate" class="modal-dialog" style="display: none; z-index: 1;">


            <div id="ctl00_ctl00_maincontent_content_Div1" class="modal-content">
                <div class="modal-header">
                    <a id="ctl00_ctl00_maincontent_content_lnkUpdateCancel" class="close" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$lnkUpdateCancel&#39;,&#39;&#39;)"></a>
                    <h4 class="modal-title">
                        <span id="ctl00_ctl00_maincontent_content_Label1" class="msg">Tüm Kayıtlar İçin Toplu İşlem</span>
                    </h4>
                </div>
                <div id="ctl00_ctl00_maincontent_content_upBulkUpdates">

                        <div class="modal-body">
                            <div id="ctl00_ctl00_maincontent_content_pnlBuklUpdate">

                                <div class="col-md-12">
                                    <div class="alert alert-info" role="alert">
                                        <strong>Bilgilendirme</strong>
                                        <br />
                                        <ul>
                                            <li>Listeleme için kullandığınız filtrelemelere göre bulunan kayıtlar için işlem yapılacaktır</li>
                                            <li>İşlem durumu ve tipi TAMAMLANDI ve İPTAL EDİLDİ işlem durumlu kayıtlar için değiştirilmez.</li>
                                            <li>Listelenen kayıt sayısı 5000' i geçtiği takdirde hiç bir işlem yapılmaz.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="ctl00_ctl00_maincontent_content_divPaymentStatus" class="col-md-6" style="border-right: .5px solid #000000">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input id="ctl00_ctl00_maincontent_content_rbPaymentStatus" type="radio" name="ctl00$ctl00$maincontent$content$rb" value="rbPaymentStatus" checked="checked" />
                                        </div>
                                        <div class="col-md-8">
                                            İşlem Durumu
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="FieldHeaderRequired col-md-4">
                                            İşlem Durumu
                                        </div>
                                        <div class="col-md-8">
                                            <select name="ctl00$ctl00$maincontent$content$drpSelectedPaymentStatusTypeForBulkUpdate" id="ctl00_ctl00_maincontent_content_drpSelectedPaymentStatusTypeForBulkUpdate">

			</select>
                                            <span id="ctl00_ctl00_maincontent_content_rvPaymentStatus" class="requiredField" style="color:Red;display:none;">İşlem durumu seçiniz</span>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="FieldHeaderRequired col-md-4">
                                            Liste Kayıt Sayısı
                                        </div>
                                        <div class="col-md-8">
                                            1171
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div id="ctl00_ctl00_maincontent_content_Div2" class="FieldHeader col-md-4">
                                            Cari Adı
                                        </div>
                                        <div class="col-md-8">


<style type="text/css">
    .LabelStyle {
        border: none;
        background-color: White;
        display: none !important;
    }


    @media screen and (min-width: 850px) and (max-width:1099px) {
        .modal-dialog-firm {
            min-width: 800px;
        }
    }
        @media screen and (min-width: 1100px) {
        .modal-dialog-firm {
            min-width: 1000px;
        }
    }

        @media screen and (min-width: 1300px) {
        .modal-dialog-firm {
            min-width: 1200px;
        }
    }

.selected-filter-div{
    padding:0 !important;

}
</style>
<script>
    $(document).ready(function () {
        var dragabble = 'False';
        if (dragabble.toLocaleLowerCase() == 'true') {
            $('#ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_pnlDealers').draggable({

                containment: "window", cursor: "crosshair", opacity: 0.5, delay: 100
            });
        }
    });


</script>
<span id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_upSelectedDealer">
        <div style="float: left;">
            <div style="float: left;">
                <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtDealer" type="text" readonly="readonly" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtDealer" class="LabelStyle" style="width:1px;" />
                <a id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_lBdealer" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$lBdealer&#39;,&#39;&#39;)" style="display: inline;"></a>

                &nbsp;
            </div>
            <div style="float: right; margin-top: 5px;">

            </div>
            <div id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_divFirmPopupButtons" style="white-space: nowrap">
                <a id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_lnkShowPopup" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$lnkShowPopup&#39;,&#39;&#39;)">
                <i class="fa fa-clone fa-flip-horizontal window-open-icon"></i>
                </a>

            </div>

        </div>
    </span>
<input type="button" name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$dummyButton" value="" onclick="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$dummyButton&#39;,&#39;&#39;)" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_dummyButton" style="display: none" />

<div id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_pnlDealers" class="modal-dialog modal-dialog-firm" onkeypress="javascript:return WebForm_FireDefaultButton(event, &#39;ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_btnSearch&#39;)" style="display: none; z-index: 1;">

    <div class="modal-content">
        <div class="modal-header">
            <a id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_lnkClose" class="close" href="javascript:__doPostBack(&#39;ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$lnkClose&#39;,&#39;&#39;)"></a>
            <h4 class="modal-title">
                <span id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_Label1" class="msg">Cari Seçimi</span>
            </h4>
        </div>
        <div id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_upDealers">

                <div class="modal-body">
                    <div class="portlet col-md-12 filter-div-main">

<script>


    //==== NOT ==== Filtreleme div elementi absolute olursa aşağıdaki javascript fonksiyonlarına mobil için ihtiyaç var



    //$(document).ready(function () {
    //    FilterFormHeight();
    //});

    //$(window).resize(function () {
    //    FilterFormHeight();
    //});

    //function FilterFormHeight() {
    //    if ($(window).width() < 991) {
    //        var form = $('.filter-form').first();
    //        var main = $('#divPortletBody').first();
    //        var selected = $('.selected-filter-div').first();
    //        if ($(form) != null && $(main) != null && $(selected) != null) {
    //            $(selected).find('.tools').find('a').click(function () {
    //                setTimeout(function () {
    //                    console.log("form: " + $(form).outerHeight());
    //                    console.log("main: " + $(main).outerHeight());
    //                    console.log("selected: " + $(selected).outerHeight());
    //                    if (($(form).outerHeight() > $(main).outerHeight() - $(selected).outerHeight()) && $(form).css("display") == "block") {
    //                        $(main).css("height", ($(selected).outerHeight() + $(form).outerHeight()) + "px");
    //                    }
    //                    else {
    //                        $(main).css("height", "auto");
    //                    }
    //                }, 500);

    //                //setTimeout(function () {
    //                //    if ($(form).css("display") == "block") {
    //                //        $(main).css("height", ($(selected).outerHeight() + $(form).outerHeight()) + "px");
    //                //    }
    //                //    else {
    //                //        $(main).css("height", $(selected).outerHeight() + "px");
    //                //    }
    //                //}, 500);
    //            });
    //        }
    //        else {
    //            console.log('error');
    //        }
    //    }
    //}
</script>
<style>
    /*==== NOT ==== Filtreleme div elementi absolute olursa aşağıdaki css kodlarına ihtiyaç var*/
    /*

 .filter-form {
        position: absolute;
        width: calc(100% - 30px);
        background: rgb(255, 255, 255);
        z-index:111;
        box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 3px 2px;
        display: block;
        margin-left: 15px;
        padding: 0px;
    }*/
</style>





<div class="portlet-title selected-filter-div">

    <div class="caption" style="padding: 0px; margin-bottom: 5px; margin-left: 15px;">

                <div class="btn-group btn-group-solid tooltips" style="cursor: default; margin: 2px; padding-bottom: 5px" data-original-title='Sıfırlanamaz!' data-container="body" data-placement="auto top">

                    <a class="aspNetDisabled btn small-btn-outline-grid">
                         <span style="color: black;">Durum:</span> <b style="color: #ff6600">AKTİF</b>
                    </a>
                </div>


    </div>
    <div class="tools" style="margin-right: 15px">
        <a href="javascript:;" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_UCSearchFilter_btnExpand" class="btn collapse efilter">
            <i class="fa fa-filter"></i>
        </a>
    </div>

</div>

                        <div id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_divFilterForm" class="portlet-body" style="display:block">

                    <div class="row margin-bottom-10">
                        <div class="col-md-6">

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Para Transfer Kodu</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtPaymentExpCode" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtPaymentExpCode" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Cari Adı</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtFirmName" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtFirmName" tabindex="2" />
                                </div>

                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Cari Tipi</span>

                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$drpSubFirmType" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_drpSubFirmType">
						<option selected="selected" value="0">--</option>

					</select>
                                </div>
                            </div>
                             <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>İl</span>

                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$drpCity" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_drpCity">
						<option selected="selected" value="0">--</option>
						<option value="1">ADANA</option>
						<option value="2">ADIYAMAN</option>
						<option value="3">AFYON</option>
						<option value="4">AĞRI</option>
						<option value="68">AKSARAY</option>
						<option value="5">AMASYA</option>
						<option value="6">ANKARA</option>
						<option value="7">ANTALYA</option>
						<option value="75">ARDAHAN</option>
						<option value="8">ARTVİN</option>
						<option value="9">AYDIN</option>
						<option value="10">BALIKESİR</option>
						<option value="74">BARTIN</option>
						<option value="72">BATMAN</option>
						<option value="69">BAYBURT</option>
						<option value="11">BİLECİK</option>
						<option value="12">BİNG&#214;L</option>
						<option value="13">BİTLİS</option>
						<option value="14">BOLU</option>
						<option value="15">BURDUR</option>
						<option value="16">BURSA</option>
						<option value="17">&#199;ANAKKALE</option>
						<option value="18">&#199;ANKIRI</option>
						<option value="19">&#199;ORUM</option>
						<option value="20">DENİZLİ</option>
						<option value="21">DİYARBAKIR</option>
						<option value="81">D&#220;ZCE</option>
						<option value="22">EDİRNE</option>
						<option value="23">ELAZIĞ</option>
						<option value="24">ERZİNCAN</option>
						<option value="25">ERZURUM</option>
						<option value="26">ESKİŞEHİR</option>
						<option value="27">GAZİANTEP</option>
						<option value="28">GİRESUN</option>
						<option value="29">G&#220;M&#220;ŞHANE</option>
						<option value="30">HAKKARİ</option>
						<option value="31">HATAY</option>
						<option value="76">IĞDIR</option>
						<option value="32">ISPARTA</option>
						<option value="33">İ&#199;EL</option>
						<option value="34">İSTANBUL</option>
						<option value="35">İZMİR</option>
						<option value="46">KAHRAMANMARAŞ</option>
						<option value="78">KARAB&#220;K</option>
						<option value="70">KARAMAN</option>
						<option value="36">KARS</option>
						<option value="37">KASTAMONU</option>
						<option value="38">KAYSERİ</option>
						<option value="71">KIRIKKALE</option>
						<option value="39">KIRKLARELİ</option>
						<option value="40">KIRŞEHİR</option>
						<option value="79">KİLİS</option>
						<option value="41">KOCAELİ</option>
						<option value="42">KONYA</option>
						<option value="43">K&#220;TAHYA</option>
						<option value="44">MALATYA</option>
						<option value="45">MANİSA</option>
						<option value="47">MARDİN</option>
						<option value="48">MUĞLA</option>
						<option value="49">MUŞ</option>
						<option value="50">NEVŞEHİR</option>
						<option value="51">NİĞDE</option>
						<option value="52">ORDU</option>
						<option value="80">OSMANİYE</option>
						<option value="53">RİZE</option>
						<option value="54">SAKARYA</option>
						<option value="55">SAMSUN</option>
						<option value="56">SİİRT</option>
						<option value="57">SİNOP</option>
						<option value="58">SİVAS</option>
						<option value="63">ŞANLIURFA</option>
						<option value="73">ŞIRNAK</option>
						<option value="59">TEKİRDAĞ</option>
						<option value="60">TOKAT</option>
						<option value="61">TRABZON</option>
						<option value="62">TUNCELİ</option>
						<option value="64">UŞAK</option>
						<option value="65">VAN</option>
						<option value="77">YALOVA</option>
						<option value="66">YOZGAT</option>
						<option value="67">ZONGULDAK</option>
						<option value="999">DİĞER</option>

					</select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>İlçe</span>

                                </div>
                                <div class="col-md-8">
                                     <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtCounty" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtCounty" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Yetkili Ad Soyad</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtAuthPersName" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtAuthPersName" tabindex="1" />
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6">

                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Vergi Numarası</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtVkn" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtVkn" tabindex="1" />
                                </div>
                            </div>
                              <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>İş Alanı</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtBussinesNo" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtBussinesNo" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Hesap Kodu</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtAccountingCode" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtAccountingCode" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="FieldHeader col-md-4">
                                                   <span>Özel Alan</span>

                                </div>
                                <div class="col-md-8">
                                    <input name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$txtReservedField" type="text" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_txtReservedField" tabindex="1" />
                                </div>
                            </div>
                            <div class="row">

                                <div class="FieldHeader col-md-4">
                                                   <span>Durum</span>

                                </div>
                                <div class="col-md-8">
                                    <select name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$drpStatus" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_drpStatus" disabled="disabled" class="aspNetDisabled">
						<option value="0">--</option>
						<option selected="selected" value="11">AKTİF</option>
						<option value="12">PASİF</option>

					</select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" name="ctl00$ctl00$maincontent$content$ucFirmLookupForBulkUpdate$btnSearch" value="Listele" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_btnSearch" class="btn btn-default" />
                        </div>
                    </div>
                        </div>
                    </div>

                    <div>
						<table class="table table-striped table-bordered" cellspacing="0" rules="all" border="1" id="ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_gridList" style="width:100%;border-collapse:collapse;">
							<tr>
								<td colspan="11">Kayıt bulunamadı!</td>
							</tr>
						</table>
					</div>




                </div>

				</div>
    </div>

			</div>

                                        </div>
                                    </div>

                                </div>
                                <div id="ctl00_ctl00_maincontent_content_divPaymentType" class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input id="ctl00_ctl00_maincontent_content_rbPaymentType" type="radio" name="ctl00$ctl00$maincontent$content$rb" value="rbPaymentType" onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ctl00$maincontent$content$rbPaymentType\&#39;,\&#39;\&#39;)&#39;, 0)" />
                                        </div>
                                        <div class="col-md-8">
                                            İşlem Tipi
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="FieldHeaderRequired col-md-4">
                                            İşlem Tipi
                                        </div>
                                        <div class="col-md-8">
                                            <select name="ctl00$ctl00$maincontent$content$drpPaymentType" id="ctl00_ctl00_maincontent_content_drpPaymentType">
				<option selected="selected" value="0">--</option>
				<option value="513">BANKA HAREKETİ</option>
				<option value="514">NAKİT</option>
				<option value="515">VİRMAN</option>
				<option value="516">&#199;EK</option>
				<option value="517">POS</option>
				<option value="518">MASRAF</option>
				<option value="519">SENET</option>
				<option value="512">KREDİ</option>

			</select>
                                            <span id="ctl00_ctl00_maincontent_content_rfPaymentType" class="requiredField" style="color:Red;display:none;">İşlem Tipi Seçiniz</span>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="FieldHeaderRequired col-md-4">
                                            Liste Kayıt Sayısı
                                        </div>
                                        <div class="col-md-8">
                                            1171
                                        </div>
                                    </div>

                                </div>

		</div>

                        </div>
                        <div class="modal-footer">
                            <div id="ctl00_ctl00_maincontent_content_Div3">


                            </div>
                        </div>

	</div>
            </div>


</div>
    </div>



                            </div>

                            <!-- END PAGE CONTENT -->
                        </div>
                        <!-- END ALERTS PORTLET-->
                    </div>

                </div>
            </div>

        </div>
        <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER -->
    <!-- BEGIN FOOTER -->
    <div class="page-footer">
        <div class="page-footer-inner">
        </div>
        <div class="scroll-to-top">
            <i class="icon-arrow-up"></i>
        </div>
    </div>
    <!-- END FOOTER -->


    <div id="ctl00_ctl00_maincontent_uprgLeftMenu" style="display:none;">

            <div class="LockOn">
            </div>
            <div id="ctl00_ctl00_maincontent_alwaysVisibleAjaxPanel">


                <div class="LockOnLoading">
                    <div class="page-spinner-bar">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>

	</div>


</div>




        <!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
        <script src="/static_files/js/jquery.stickyheader.js"></script>
        <!-- BEGIN THEME GLOBAL SCRIPTS -->
        <script src="/static_files/assets/global/scripts/app.min.js" type="text/javascript"></script>
        <script src="/static_files/assets/layouts/layout4/scripts/layout.min.js" type="text/javascript"></script>

        <script src="/static_files/assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
        <script src="/static_files/assets/global/plugins/amcharts/amcharts/amcharts.js" type="text/javascript"></script>
        <script src="/static_files/assets/global/plugins/amcharts/amcharts/serial.js" type="text/javascript"></script>
        <script src="/static_files/assets/global/plugins/amcharts/amcharts/pie.js"></script>
        <script src="/static_files/assets/global/plugins/amcharts/amcharts/plugins/export/export.js"></script>
        <script src="/static_files/assets/global/plugins/amcharts/amcharts/themes/light.js"></script>
        <script src="/static_files/assets/global/plugins/amcharts/amcharts/themes/dark.js"></script>
        <!-- END THEME GLOBAL SCRIPTS -->


        <!-- END JAVASCRIPTS -->

        <div id="loadingWrapper" class="LockOff">
        </div>
        <div id="ctl00_ctl00_alwaysVisibleAjaxPanel">

            <div id="loading" class="LockOffLoading">
                <div class="page-spinner-bar">
                    <span style="display:none" id="alertText">Lütfen bekleyiniz, işleminiz gerçekleştiriliyor...</span>
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>

</div>

        <script src="/static_files/js/web.js?v=6" type="text/javascript"></script>

<script type="text/javascript">
//<![CDATA[
var Page_Validators =  new Array(document.getElementById("ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate"), document.getElementById("ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate"), document.getElementById("ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect"), document.getElementById("ctl00_ctl00_maincontent_content_rfBulkPaymentType"), document.getElementById("ctl00_ctl00_maincontent_content_rvPaymentStatus"), document.getElementById("ctl00_ctl00_maincontent_content_rfPaymentType"));
//]]>
</script>

<script type="text/javascript">
//<![CDATA[
var ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate = document.all ? document.all["ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate"] : document.getElementById("ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate");
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.IsMaskedEdit = "true";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.ValidEmpty = "false";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.MaximumValue = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.MinimumValue = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.InitialValue = "__.__.____";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.ValidationExpression = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.ClientValidationFunction = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.TargetValidator = "ctl00_ctl00_maincontent_content_ucStartDate_txtCalendarDate";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.EmptyValueMessage = "*";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.EmptyValueText = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.MaximumValueMessage = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.MaximumValueText = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.MinimumValueMessage = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.MinimumValueText = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.InvalidValueMessage = "<br/>Geçerli bir tarih giriniz";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.InvalidValueText = "";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.InvalidValueCssClass = "MaskedEditError";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.CssBlurNegative = "MaskedEditBlurNegative";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.CssFocus = "MaskedEditFocus";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.CssFocusNegative = "MaskedEditFocusNegative";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.TooltipMessage = "*";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.FirstMaskPosition = "0";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.DateSeparator = ".";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.DateFormat = "DMY";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.Century = "2000";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.evaluationfunction = "MaskedEditValidatorDate";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.LastMaskPosition = "10";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.controltovalidate = "ctl00_ctl00_maincontent_content_ucStartDate_txtCalendarDate";
ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate.display = "Dynamic";
var ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate = document.all ? document.all["ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate"] : document.getElementById("ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate");
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.IsMaskedEdit = "true";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.ValidEmpty = "true";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.MaximumValue = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.MinimumValue = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.InitialValue = "__.__.____";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.ValidationExpression = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.ClientValidationFunction = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.TargetValidator = "ctl00_ctl00_maincontent_content_ucEndDate_txtCalendarDate";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.EmptyValueMessage = "*";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.EmptyValueText = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.MaximumValueMessage = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.MaximumValueText = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.MinimumValueMessage = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.MinimumValueText = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.InvalidValueMessage = "<br/>Geçerli bir tarih giriniz";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.InvalidValueText = "";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.InvalidValueCssClass = "MaskedEditError";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.CssBlurNegative = "MaskedEditBlurNegative";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.CssFocus = "MaskedEditFocus";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.CssFocusNegative = "MaskedEditFocusNegative";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.TooltipMessage = "*";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.FirstMaskPosition = "0";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.DateSeparator = ".";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.DateFormat = "DMY";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.Century = "2000";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.evaluationfunction = "MaskedEditValidatorDate";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.LastMaskPosition = "11";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.controltovalidate = "ctl00_ctl00_maincontent_content_ucEndDate_txtCalendarDate";
ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate.display = "Dynamic";
var ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect = document.all ? document.all["ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect"] : document.getElementById("ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect");
ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect.controltovalidate = "ctl00_ctl00_maincontent_content_drpSelectedPaymentStatusType";
ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect.errormessage = "İşlem durumu seçiniz";
ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect.display = "Dynamic";
ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect.validationGroup = "vgPayment";
ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect.initialvalue = "";
var ctl00_ctl00_maincontent_content_rfBulkPaymentType = document.all ? document.all["ctl00_ctl00_maincontent_content_rfBulkPaymentType"] : document.getElementById("ctl00_ctl00_maincontent_content_rfBulkPaymentType");
ctl00_ctl00_maincontent_content_rfBulkPaymentType.controltovalidate = "ctl00_ctl00_maincontent_content_drpBulkPaymentType";
ctl00_ctl00_maincontent_content_rfBulkPaymentType.errormessage = "İşlem Tipi Seçiniz";
ctl00_ctl00_maincontent_content_rfBulkPaymentType.display = "Dynamic";
ctl00_ctl00_maincontent_content_rfBulkPaymentType.validationGroup = "vgBulkType";
ctl00_ctl00_maincontent_content_rfBulkPaymentType.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl00_ctl00_maincontent_content_rfBulkPaymentType.initialvalue = "0";
var ctl00_ctl00_maincontent_content_rvPaymentStatus = document.all ? document.all["ctl00_ctl00_maincontent_content_rvPaymentStatus"] : document.getElementById("ctl00_ctl00_maincontent_content_rvPaymentStatus");
ctl00_ctl00_maincontent_content_rvPaymentStatus.controltovalidate = "ctl00_ctl00_maincontent_content_drpSelectedPaymentStatusTypeForBulkUpdate";
ctl00_ctl00_maincontent_content_rvPaymentStatus.errormessage = "İşlem durumu seçiniz";
ctl00_ctl00_maincontent_content_rvPaymentStatus.display = "Dynamic";
ctl00_ctl00_maincontent_content_rvPaymentStatus.validationGroup = "vgBulk";
ctl00_ctl00_maincontent_content_rvPaymentStatus.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl00_ctl00_maincontent_content_rvPaymentStatus.initialvalue = "0";
var ctl00_ctl00_maincontent_content_rfPaymentType = document.all ? document.all["ctl00_ctl00_maincontent_content_rfPaymentType"] : document.getElementById("ctl00_ctl00_maincontent_content_rfPaymentType");
ctl00_ctl00_maincontent_content_rfPaymentType.controltovalidate = "ctl00_ctl00_maincontent_content_drpPaymentType";
ctl00_ctl00_maincontent_content_rfPaymentType.errormessage = "İşlem Tipi Seçiniz";
ctl00_ctl00_maincontent_content_rfPaymentType.display = "Dynamic";
ctl00_ctl00_maincontent_content_rfPaymentType.validationGroup = "vgType";
ctl00_ctl00_maincontent_content_rfPaymentType.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl00_ctl00_maincontent_content_rfPaymentType.initialvalue = "0";
//]]>
</script>


<script type="text/javascript">
//<![CDATA[
timerDivRefresh = "ctl00_ctl00_maincontent_content_divTimerRefresh";
timeLeftRefresh = 298000;
clearTimeout(timerRefresh);
timerRefresh = setTimeout("updateTimerRefresh()", 1000);
function ControlWindowAndSession(){
}
if (window.addEventListener){ window.addEventListener('load', webInit, false); } else if (window.attachEvent){  window.attachEvent('onload', webInit);}
gridViewResponsive('ctl00_ctl00_maincontent_UCFavoriteMenuV2_grdList');Sys.Extended.UI.Localization.SetLocale("tr");Sys.Extended.UI.Localization.SetLocale("tr");Sys.Extended.UI.Localization.SetLocale("tr");Sys.Extended.UI.Localization.SetLocale("tr");Sys.Extended.UI.Localization.SetLocale("tr");
var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        Sys.Extended.UI.Localization.SetLocale("tr");Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ConfirmButtonBehavior, {"confirmText":"Favori menüyü kaldırmak istiyor musunuz?","id":"ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl00_ConfirmButtonExtender3"}, null, null, $get("ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl00_lnkDelete"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ConfirmButtonBehavior, {"confirmText":"Favori menüyü kaldırmak istiyor musunuz?","id":"ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl01_ConfirmButtonExtender3"}, null, null, $get("ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl01_lnkDelete"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"backgroundCssClass":"modalBackground","dynamicServicePath":"/Firm/PaymentList.aspx","id":"ctl00_ctl00_maincontent_UCFavoriteMenuV2_mdlClCard","popupControlID":"ctl00_ctl00_maincontent_UCFavoriteMenuV2_pnlClCard"}, null, null, $get("ctl00_ctl00_maincontent_UCFavoriteMenuV2_dummyButton"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.FilteredTextBoxBehavior, {"filterType":2,"id":"ctl00_ctl00_maincontent_content_FilteredTextBoxExtender3"}, null, null, $get("ctl00_ctl00_maincontent_content_txtPaymentID"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.FilteredTextBoxBehavior, {"filterType":3,"id":"ctl00_ctl00_maincontent_content_ftbPaymentAmount1","validChars":"."}, null, null, $get("ctl00_ctl00_maincontent_content_txtAmount1"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.FilteredTextBoxBehavior, {"filterType":3,"id":"ctl00_ctl00_maincontent_content_ftbPaymentAmount2","validChars":"."}, null, null, $get("ctl00_ctl00_maincontent_content_txtAmount2"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.FilteredTextBoxBehavior, {"filterType":3,"id":"ctl00_ctl00_maincontent_content_FilteredTextBoxExtender1","validChars":"."}, null, null, $get("ctl00_ctl00_maincontent_content_txtAmountMax1"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.FilteredTextBoxBehavior, {"filterType":3,"id":"ctl00_ctl00_maincontent_content_FilteredTextBoxExtender2","validChars":"."}, null, null, $get("ctl00_ctl00_maincontent_content_txtAmountMax2"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.CalendarBehavior, {"button":$get("ctl00_ctl00_maincontent_content_ucStartDate_lnkCalendarDate"),"format":"dd.MM.yyyy","id":"ctl00_ctl00_maincontent_content_ucStartDate_txtCalendarDate_CalendarExtender"}, null, null, $get("ctl00_ctl00_maincontent_content_ucStartDate_txtCalendarDate"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.MaskedEditBehavior, {"ClientStateFieldID":"ctl00_ctl00_maincontent_content_ucStartDate_meeCalendarDate_ClientState","century":2000,"clearMaskOnLostFocus":false,"cultureAMPMPlaceholder":"ÖÖ;ÖS","cultureCurrencySymbolPlaceholder":"₺","cultureDateFormat":"DMY","cultureDatePlaceholder":".","cultureDecimalPlaceholder":",","cultureName":"tr-TR","cultureThousandsPlaceholder":".","cultureTimePlaceholder":":","id":"ctl00_ctl00_maincontent_content_ucStartDate_meeCalendarDate","mask":"99/99/9999","maskType":1}, null, null, $get("ctl00_ctl00_maincontent_content_ucStartDate_txtCalendarDate"));
});

document.getElementById('ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ctl00_ctl00_maincontent_content_ucStartDate_mevCalendarDate'));
}
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.CalendarBehavior, {"button":$get("ctl00_ctl00_maincontent_content_ucEndDate_lnkCalendarDate"),"format":"dd.MM.yyyy","id":"ctl00_ctl00_maincontent_content_ucEndDate_txtCalendarDate_CalendarExtender"}, null, null, $get("ctl00_ctl00_maincontent_content_ucEndDate_txtCalendarDate"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.MaskedEditBehavior, {"ClientStateFieldID":"ctl00_ctl00_maincontent_content_ucEndDate_meeCalendarDate_ClientState","century":2000,"cultureAMPMPlaceholder":"ÖÖ;ÖS","cultureCurrencySymbolPlaceholder":"₺","cultureDateFormat":"DMY","cultureDatePlaceholder":".","cultureDecimalPlaceholder":",","cultureName":"tr-TR","cultureThousandsPlaceholder":".","cultureTimePlaceholder":":","id":"ctl00_ctl00_maincontent_content_ucEndDate_meeCalendarDate","mask":"99/99/9999","maskType":1}, null, null, $get("ctl00_ctl00_maincontent_content_ucEndDate_txtCalendarDate"));
});

document.getElementById('ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ctl00_ctl00_maincontent_content_ucEndDate_mevCalendarDate'));
}
Sys.Application.add_init(function() {
    $create(Sys.UI._Timer, {"enabled":true,"interval":300000,"uniqueID":"ctl00$ctl00$maincontent$content$tmrUpdateList"}, null, null, $get("ctl00_ctl00_maincontent_content_tmrUpdateList"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"backgroundCssClass":"modalBackground","cancelControlID":"ctl00_ctl00_maincontent_content_ucMailLookup_lnkFirmMail","dynamicServicePath":"/Firm/PaymentList.aspx","id":"mpePopupMail","popupControlID":"ctl00_ctl00_maincontent_content_ucMailLookup_pnlPopupMail"}, null, null, $get("ctl00_ctl00_maincontent_content_ucMailLookup_lnkShowPopupMail"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"backgroundCssClass":"modalBackground","cancelControlID":"ctl00_ctl00_maincontent_content_lnkFirm","dynamicServicePath":"/Firm/PaymentList.aspx","id":"mpePopUpFirm","popupControlID":"ctl00_ctl00_maincontent_content_pnlPopupFirm"}, null, null, $get("ctl00_ctl00_maincontent_content_lnkShowPopupFirm"));
});

document.getElementById('ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ctl00_ctl00_maincontent_content_rfvPaymentStatusSelect'));
}

document.getElementById('ctl00_ctl00_maincontent_content_rfBulkPaymentType').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ctl00_ctl00_maincontent_content_rfBulkPaymentType'));
}
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"backgroundCssClass":"modalBackground","cancelControlID":"ctl00_ctl00_maincontent_content_ucFirmLookup_lnkClose","dynamicServicePath":"/Firm/PaymentList.aspx","id":"ctl00_ctl00_maincontent_content_ucFirmLookup_mdlDealers","popupControlID":"ctl00_ctl00_maincontent_content_ucFirmLookup_pnlDealers"}, null, null, $get("ctl00_ctl00_maincontent_content_ucFirmLookup_dummyButton"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"backgroundCssClass":"modalBackground","cancelControlID":"ctl00_ctl00_maincontent_content_lnkUpdateCancel","dynamicServicePath":"/Firm/PaymentList.aspx","id":"mpePopupBulkUpdate","popupControlID":"ctl00_ctl00_maincontent_content_pnlPopupBulkUpdate"}, null, null, $get("ctl00_ctl00_maincontent_content_lnkShowPopupBulkUpdate"));
});

document.getElementById('ctl00_ctl00_maincontent_content_rvPaymentStatus').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ctl00_ctl00_maincontent_content_rvPaymentStatus'));
}
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"backgroundCssClass":"modalBackground","cancelControlID":"ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_lnkClose","dynamicServicePath":"/Firm/PaymentList.aspx","id":"ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_mdlDealers","popupControlID":"ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_pnlDealers"}, null, null, $get("ctl00_ctl00_maincontent_content_ucFirmLookupForBulkUpdate_dummyButton"));
});

document.getElementById('ctl00_ctl00_maincontent_content_rfPaymentType').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ctl00_ctl00_maincontent_content_rfPaymentType'));
}
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.AlwaysVisibleControlBehavior, {"horizontalSide":1,"id":"ctl00_ctl00_maincontent_AlwaysVisibleControlExtender1"}, null, null, $get("ctl00_ctl00_maincontent_alwaysVisibleAjaxPanel"));
});
Sys.Application.add_init(function() {
    $create(Sys.UI._UpdateProgress, {"associatedUpdatePanelId":null,"displayAfter":500,"dynamicLayout":true}, null, null, $get("ctl00_ctl00_maincontent_uprgLeftMenu"));
});
Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.AlwaysVisibleControlBehavior, {"horizontalSide":1,"id":"ctl00_ctl00_AlwaysVisibleControlExtender1","verticalOffset":40}, null, null, $get("ctl00_ctl00_alwaysVisibleAjaxPanel"));
});
//]]>
</script>
</form>
</body>
</html>
