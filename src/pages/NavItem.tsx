function NavItem() {
    return (
        <div className="sticky top-20 z-10 container flex items-center justify-center">
            <div className="bg-slate-800 rounded-full">
                <ul className="rounded-full flex gap-5 m-2">
                    <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg"><a href="" className="text-white ">Homepage</a></li>
                    <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg"><a href="" className="text-white ">Vacation</a></li>
                    <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg"><a href="" className="text-white ">Hotels</a></li>
                    <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg"><a href="" className="text-white ">All in One</a></li>
                    <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg"><a href="" className="text-white ">Car Rental</a></li>
                </ul>
            </div>
        </div>
    );
}
export default NavItem;