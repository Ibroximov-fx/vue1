<template>
  <div class="max-w-[1360px] mx-auto pt-[120px]">
    <div class="flex pt-15 pl-20 border border-[#4E4E4E] rounded-[20px] items-center gap-[76px] pb-[60px]">
      <div>
        <p class="font-semibold italic text-[30px] text-[#FFFFFF] w-[640px] pt-[60px]">Sizni bir finjon qahva ustida
          loyihangizni batafsil muhokama qilishga mamnuniyat ila taklif qilamiz.</p>
        <form class="pt-10 flex flex-col">
          <input type="text" placeholder="Ismingiz"
                 class="border-b-[1px] border-[#AAAAAA] bg-transparent text-[17px] w-[499px] outline-none text-[#FFFFFF] cursor-pointer placeholder:text-[17px]">
          <input type="text" placeholder="Telefon raqamingiz"
                 class="border-b-[1px] border-[#AAAAAA] bg-transparent text-[17px] w-[499px] mt-[25px] outline-none text-[#FFFFFF] cursor-pointer placeholder:text-[17px]">
          <input type="text" placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"
                 class="border-b-[1px] border-[#AAAAAA] bg-transparent text-[17px] w-[499px] mt-[25px] text-[#FFFFFF] outline-none cursor-pointer placeholder:text-[17px]">
        </form>
        <p class="font-semibold text-[24px] text-[#FFFFFF] pt-10">Qanday xizmatlardan foydalanishni xoxlaysiz?</p>
        <div class="flex pt-[34px] gap-[175px]">
          <form class="flex flex-col gap-y-[30px]">
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="backend">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="backend">Backend</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="CRM">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="CRM">CRM ishlab chiqish</label>
            </div>
            <div class="gap-[10px] flex items-start">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Internet">
              <label class="font-semibold text-[18px] text-[#FFFFFF] w-[170px]" for="Internet">Internet magazin
                ishlab chiqish</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Logotip">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Logotip">Logotip va Brandbook</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Portal">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Portal">Portal ishlab chiqish</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Veb">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Veb">Veb dizayn</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Mobilograf">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Mobilograf">Mobilograf</label>
            </div>
          </form>
          <form class="flex flex-col gap-y-[30px]">
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Frontend">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Frontend">Frontend</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Grafik">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Grafik">Grafik dizayn</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Motion">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="Motion">Motion dizayn</label>
            </div>
            <div class="gap-[10px] flex items-start">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="Mobil">
              <label class="font-semibold text-[18px] text-[#FFFFFF] w-[120px]" for="Mobil">Mobil ilova
                ishlab chiqish</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="sayt">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="sayt">Veb sayt ishlab chiqish</label>
            </div>
            <div class="gap-[10px] flex items-center">
              <input class="w-[20px] h-[20px] border border-[#AAAAAA] rounded-[4px] cursor-pointer" type="checkbox" id="SMM">
              <label class="font-semibold text-[18px] text-[#FFFFFF]" for="SMM">SMM dizayn</label>
            </div>
          </form>
        </div>
      </div>
      <div>
      <div class="bg-[#5353531A] pt-[40px] pb-[49px] px-[60px]  shadow-[20px_20px_40px_0px_#F1D8FD14] rounded-[10px] pr-20 text-center mt-[86px]">
        <p class="font-semibold text-[24px] text-[#FFFFFF]">NIMANI MA'QUL KO'RASIZ?</p>
        <div class="pt-10 flex gap-[66px]">
          <div>
            <img
                src="../../../assets/portfolio/cofe.png"
                alt="cofe"
                @click="hasShadow = !hasShadow"
                :class="hasShadow ? 'shadow-[20px_20px_40px_0px_#F1D8FD14]' : ''"
            >
            <p class="font-semibold text-[24px] text-[#FFFFFF] pt-[10px]">Achchiq kofe</p>
          </div>
          <div>
            <img src="../../../assets/portfolio/milkCofe.png" alt="milkCofe"
                 @click="milkShadow = !milkShadow"
                 :class="milkShadow ? 'shadow-[20px_20px_40px_0px_#F1D8FD14]' : ''">
            <p class="font-semibold text-[24px] text-[#FFFFFF] pt-[10px]">Sutli kofe</p>
          </div>
        </div>
        <div class="pt-[66px] flex gap-[66px]">
          <div>
            <img src="../../../assets/portfolio/water.png" alt="water"
                 @click="waterShadow = !waterShadow"
                 :class="waterShadow ? 'shadow-[20px_20px_40px_0px_#F1D8FD14]' : ''">
            <p class="font-semibold text-[24px] text-[#FFFFFF] pt-[10px]">Suv</p>
          </div>
          <div>
            <img src="../../../assets/portfolio/tea.png" alt="tea"
                 @click="teaShadow = !teaShadow"
                 :class="teaShadow ? 'shadow-[20px_20px_40px_0px_#F1D8FD14]' : ''">
            <p class="font-semibold text-[24px] text-[#FFFFFF] pt-[10px]">Choy</p>
          </div>
        </div>
      </div>
        <img @click="sendInformation" src="../../../assets/portfolio/abonent.png" alt="abonent" class="mt-[25px] hover:shadow-[20px_20px_40px_0px_#F1D8FD14] cursor-pointer">
    </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const hasShadow = ref(false)
const milkShadow = ref(false)
const waterShadow = ref(false)
const teaShadow = ref(false)
function sendInformation() {
  alert("siz muvaqqiyatli mijozimiz buldingin ")
}
</script>