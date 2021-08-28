# twilio-example
Twilio ile WhatsAp dan mesaj gönderme

Twilio, dünya çapında binlerce firmanın çalıştığı , iletişim uygulamaları oluşturmanıza olanak tanıyan bir bulut iletişim uygulaması platformudur.

Bu yazımda, Twilio'yu NodeJs ile birlikte Whatsup api'yi nasıl kullanacağımızı kontrol edeceğiz.

Başlangıç
Server Ayarları
Mesaj gönderme
1. Başlangıç
İlk önce npm init -y diyerek bir nodejs projesi oluşturun


COPY
npm init -y
Sonrasında twilio'un paketini kullanabilmeniz için aşşağıdaki komutu kullanın


COPY
npm install express twilio dotenv --save
twilio.com bağlantısına tıklayarak bir twilio hesabı ve kullanıma hazır bir numara oluşturabilirsin.

Bir dotenv dosyası kullanarak sunucumuzu yapılandıracağız. Twilio api ve secret keylerinin gizli olması açısından .env adında bir dosya oluşturun ve buna aşağıdaki satırları ekleyin. Aşağıdaki ayrıntıları almak ve bunları env dosyanıza koymak için twilio hesabına göz atabilirsin.

2.Server Ayarları

COPY
TWILIO_ACCOUNT_SID=
TWILIO_ACCOUNT_AUTH=
Ardından, ismi önemli değil (index , app , server) bir dosya oluşturun.Dotenv ile değişkenlerinizi atayıp en yukarıya ekleyin


COPY
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID ;
const authToken = process.env.TWILIO_ACCOUNT_AUTH ;
Twilio hesabınızdan Messaging -> Try it Out -> Send a Whatsup Message sekmesine tıklayın.Çıkacak olan ekran Code Sandbox için sizden +14155238886 (Twilio Whatsup Numarası) join shirt-personal yazmanızı isteyecek.Yazdıktan sonra Whatsup numaranıza bir cevap dönecektir. https://aytacunal.com/twilio-node-js-ile-whatsup-mesaj-gonderme
