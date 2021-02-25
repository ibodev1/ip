$(document).ready(function () {
  $(".load").css("display", "none");
  // İP SORGULAMA
  $("#btn").on("click", () => {
    var girilen_ip_value = $("#girilen-ip").val();
    $(".load").css("display", "block");
    if (!girilen_ip_value) {
      $("#girilen-ip").css("border", "1px solid red");
    } else {
      $("#nav").css("display", "none");
      $(".text").removeAttr("style");

      $.getJSON(
        "https://freegeoip.app/json/" + girilen_ip_value,
        function (data) {
          var ipadresi = `${data.ip}`;
          var ucode = `${data.country_code}`;
          var uname = `${data.country_name}`;
          var sehir = `${data.city}`;
          var zcode = `${data.zip_code}`;
          var tzone = `${data.time_zone}`;
          $(".ip-adress").html(ipadresi);
          $(".ip").html(ipadresi);
          $("#uc").html(ucode);
          $("#ulke").html(uname);
          $("#sehir").html(sehir);
          $("#zip").html(zcode);
          $("#time").html(tzone);
        }
      )
        .done(function () {
          console.log("Json Geldi Başarılı!");
        })
        .fail(function (jqxhr) {
          $(".ip-adress").html("HATA!");
          $(".ip").html(jqxhr.responseText);
        })
        .always(function () {
          console.log("Tamalandı!");
          $(".load").css("display", "none");
        });
    }
  });
  
  $(".text").click(function() {
    location.reload();
  });
});
