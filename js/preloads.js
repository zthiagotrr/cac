
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.G9rhWAww.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.BC7UWWSl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedContact.DGt4rONr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.BEJeaM8N.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PurchaseOptionsAgreement.CqXlSIBx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedDeliveryAddress.Q5lZUP6D.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup.CQ8XiOw1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal.DiAS9Z8F.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo.Cqgfq66R.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OptionDetails.B_nmQfID.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo.q_ItwMd4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks.CYPjr7Lu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods.9bAys2TU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useIsOriginatedFromShop.WGtNZhgC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useSessionExchange.jwjnMWea.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGetUlcFrameUri.CXfJAm3w.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin.BB3I_yIF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section.CrwGeHg7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/google-pay.DaRTVB1-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.B75_ouJ2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context.CaEGYE_h.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions.C9wniMbm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown.W5axdbUo.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/CheckoutAsGuest.CBxGozXT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ButtonWithRegisterWebPixel.BwNa1aEk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/NoAddressLocationFullDetour.jzulO36e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList.CdbGstvv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.A3AXNm_I.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.OdbFr4R-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedContact.CxMuAABI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.7LYaNSSo.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useUnauthenticatedErrorModal.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/OptionDetails.BgrbqXV7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/LegacyVaultedShippingMethods.DytT_hpK.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/google-pay.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ButtonWithRegisterWebPixel.B6bwbcOx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/NoAddressLocationFullDetour.DU8rC2PR.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  