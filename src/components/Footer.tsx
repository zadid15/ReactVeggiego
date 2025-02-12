export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold">
                        Vegg<span className="text-green-400">iego</span>.
                    </h3>
                    <p className="mt-2 text-gray-400">Belanja sayur segar tanpa ribet.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="hover:text-green-400">
                            Instagram
                        </a>
                        <a href="#" className="hover:text-green-400">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-green-400">
                            WhatsApp
                        </a>
                    </div>
                    <p className="mt-6 text-gray-500 text-sm">
                        © 2025 Veggiego. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}