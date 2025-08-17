  <template>
  <div class="relative group">
    <img :src="project.img" alt="img" class="hover:">
    <div class="absolute top-[15px] right-[15px] bg-[#FFFFFF] rounded-[10px]">
      <p class="my-[9px] mx-[30px]">{{project.category}}</p>
    </div>
    <div class="absolute bg-[#000000DE] top-[15px] left-[15px] right-[15px] bottom-[15px] rounded-[5px] opacity-0 group-hover:opacity-100 ">
      <img :src="project.chevron" alt="chevron" class="ml-[316px] w-[87px] h-[87px]">
      <p class="pt-[191px] font-[bold] text-[20px] text-[#FFFFFF] pl-[30px]">{{project.name}}</p>
    </div>
  </div>
  </template>
  <script setup>
  defineProps({
    project:{}
  })
  </script>