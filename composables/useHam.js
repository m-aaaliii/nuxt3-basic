export default function useHam() {
  let mobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };

  return {
    mobileMenuOpen,
    toggleMobileMenu,
  };
}
