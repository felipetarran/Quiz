<template>
<nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <div class="container-fluid">
      <a class="text-xl text-black" href="#">Bem vindo ao Jogo !</a>
    </div>
    <div class="right">
        <router-link to="/login">
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >Login
        </button>
        </router-link>
    </div>
  </div>
</nav>
</template>