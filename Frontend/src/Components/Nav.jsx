import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

import NavItem from "./NavItem";
import PrimaryButton from "./PrimaryButton";

export default function Nav() {

    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate("/login");
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}

                <div className="text-2xl font-bold">
                    <span className="text-blue-600">LMS</span>
                    <span className="text-gray-800"> Portal</span>
                </div>

                {/* Navigation */}

                <div className="flex items-center gap-2">

                    {token ? (
                        <>
                            <NavItem to="/dashboard">
                                Dashboard
                            </NavItem>

                            <NavItem to="/student">
                                Students
                            </NavItem>

                            <NavItem to="/course">
                                Courses
                            </NavItem>
                        </>
                    ) : (
                        <>
                            <NavItem to="/login">
                                Login
                            </NavItem>

                            <NavItem to="/signup">
                                Sign Up
                            </NavItem>
                        </>
                    )}

                </div>

                {/* Right Side */}

                <div>

                    {token && (
                        <PrimaryButton
                            value="Logout"
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600"
                        />
                    )}

                </div>

            </div>

        </nav>
    );
}