

export const styles_info_paciente = {
  card: "bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden",
  header: "p-6 bg-gradient-to-r from-[#00008B] to-blue-500 text-white",
  headerTitle: "text-2xl font-bold",
  headerSubtitle: "text-blue-100 text-sm",
  tabsContainer: "border-b border-blue-100 bg-blue-50 print:hidden",
  tabButton: `relative px-6 py-3 text-sm font-medium transition`,
  tabActive: "text-blue-800 bg-white",
  tabInactive: "text-blue-600 hover:bg-blue-100",
  tabIndicator: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00008B] to-blue-500",
  tabContent: "p-6 min-h-[250px] print:hidden",
  printContainer: "bg-white p-10 text-black",
  printHeader: "flex justify-between items-center border-b-2 pb-4 mb-6",
  printPatientGrid: "grid grid-cols-2 gap-3",
  printSection: "mb-6 text-sm",
  printSectionTitle: "font-semibold text-lg mb-2",
  printSignature: "mt-12 grid grid-cols-2 items-end text-sm",
  qrCode: "w-24 h-24"
};

export default styles_info_paciente
