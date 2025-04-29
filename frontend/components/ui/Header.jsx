'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { BTELogo } from "./BTELogo.jsx";

export default function Header() {

    return (
            <Navbar className="mb-5">
                <NavbarBrand className="">
                    <BTELogo />
                    <p className="pl-5 font-bold text-inherit">BTE</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href="/capstone/2024/spring" aria-current="page">
                            Spring 2024
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/capstone/2024/fall">
                            Fall 2024
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/capstone/2025/spring">
                            Spring 2025
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">Student Login</Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
    )
}