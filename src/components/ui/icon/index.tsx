import { 
    CaretLeft,
    CaretRight,
    DotsThreeOutline,
    ListBullets,
    TipJar,
    MagnifyingGlass,
    House,
    ArrowsDownUp,
    ChartDonut,
    Receipt,
    ArrowFatLinesLeft,
    CheckCircle,
    WarningCircle,
    Wrench,
    Network,
    PottedPlant,
    ShieldPlus,
    Video,
    Warehouse,
    Barbell,
    MusicNote,
    BookOpenText,
    Funnel,
    SortAscending,
    Eye,
    EyeSlash,
    type IconWeight
} from "@phosphor-icons/react"

export const iconMap = {
    CaretLeft,
    CaretRight,
    DotsThreeOutline,
    ListBullets,
    TipJar,
    MagnifyingGlass,
    House,
    ArrowsDownUp,
    ChartDonut,
    Receipt,
    ArrowFatLinesLeft,
    CheckCircle,
    WarningCircle,
    Wrench,
    Network,
    PottedPlant,
    ShieldPlus,
    Video,
    Warehouse,
    Barbell,
    MusicNote,
    BookOpenText,
    Funnel,
    SortAscending,
    Eye,
    EyeSlash,
}

export type IconType = { icon: keyof typeof iconMap; size: number; weight?: IconWeight }

export function Icon({ icon, size, weight="fill"  }: IconType) {
    const Component = iconMap[icon]

    return <Component size={size} weight={weight}/>
}