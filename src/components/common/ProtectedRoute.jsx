// ============================================
// src/components/common/ProtectedRoute.jsx
//
// بيحمي الصفحات اللي محتاجة لوجن
// لو مش داخل → يرجعه لصفحة اللوجن أوتوماتيك
// ============================================

import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // ❌ في حالة التحميل → عرّض الشاشة كما هي حتى ننتظر Firebase
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-accent border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-400">جاري التحقق...</p>
        </div>
      </div>
    );
  }

  // مش داخل → ابعته لصفحة اللوجن
  if (!user) return <Navigate to="/login" replace />;

  // داخل → اعرض الصفحة المطلوبة
  return children;
};

export default ProtectedRoute;
