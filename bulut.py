from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()
 # Chrome sürücünüzün konumunu belirtmeyi unutmayın
WebDriverWait(driver,10)
# Giriş sayfasına git
ana_sekme = driver.window_handles[0]
driver.get("https://portal.buluttahsilat.com/UserLogin.aspx?wk=4d69726d0a0d02f246881b05b0809135f1d06935")
sistem_giris_field = driver.find_element(By.ID,"ctl00_maincontent_LinkButton2")
sistem_giris_field.click()
wait = WebDriverWait(driver, 10)
wait.until(EC.number_of_windows_to_be(2))
# Şu anki tüm sekmeleri al
tum_sekmeler = driver.window_handles

# Yeni sekmenin id'sini bul
yeni_sekme = [x for x in tum_sekmeler if x != ana_sekme][0]

# Yeni sekme üzerine geçiş yap
driver.switch_to.window(yeni_sekme)
##<#WebDriverWait(driver,10)
###'''
# Giriş bilgilerini gir
firma_kodu_field = driver.find_element(By.ID, "ctl00_maincontent_txtFirmCode")
firma_kodu_field.send_keys("f1327")
WebDriverWait(driver,10)
username_field = driver.find_element(By.ID, "ctl00_maincontent_txtUserName")
username_field.send_keys("Emre.Yilmaz")
WebDriverWait(driver,10)
password_field = driver.find_element(By.ID, "ctl00_maincontent_txtPassword")
password_field.send_keys("Bursatexas16.")
WebDriverWait(driver,10)
login_field=driver.find_element(By.ID,"ctl00_maincontent_btnLogin")
login_field.click()
hesap_haraketleri_field=driver.find_element(By.ID,"ctl00_ctl00_maincontent_UCFavoriteMenuV2_rptFavoriMenu_ctl00_hypMenuLink")
hesap_haraketleri_field.click()
#time.sleep(100)

WebDriverWait(driver,10)
#time.sleep(100)
#time.sleep(2)  # Giriş işleminin tamamlanmasını bekle
#//*[@id="ctl00_ctl00_maincontent_content_grdList"]/tbody/tr/td[10]/div
# Ödeme listesi sayfasına git


# TODO: Filtre seçeneklerini ve prompt test etme mantığını burada uygulayın

# Örnek prompt test etme mantığı
prompts = ["bakkal amca", "pekcan", "güvenç"]  # Test edilecek promptları burada listeleyin
filter_input_field = driver.find_element(By.ID, "ctl00_ctl00_maincontent_content_txtSenderFirmName")  # Filtre giriş alanının ID'sini güncelleyin
filter_submit_button = driver.find_element(By.ID, "ctl00_ctl00_maincontent_content_btnSearch")  # Filtre butonunun ID'sini güncelleyin

for prompt in prompts:
    filter_input_field.clear()
    filter_input_field.send_keys(prompt)
    filter_submit_button.click()

    time.sleep(15)  # Sonuçların yüklenmesini bekle

    results = driver.find_elements(By.ID, "ctl00_ctl00_maincontent_content_grdList_ctl02_lblAmount")  # Sonuçların sınıf adını güncelleyin
    for result in results:
        print(result.text)

# Tarayıcıyı açık bırak
# Selenium ile tarayıcıyı açık tutmak için özel bir komut yoktur.
# Bu kısmı kendi ihtiyaçlarınıza göre düzenleyebilirsiniz.
#'''
